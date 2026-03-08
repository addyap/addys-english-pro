import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import RatingBadge from "@/components/ai-trainer/RatingBadge";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { Correction, VocabUpgrade as VocabUpgradeType, ScoreField, RatingField } from "@/types/ai-trainers";
import {
  Mail, ArrowRight, ArrowLeft, Send, RotateCcw, Sparkles, CheckCircle,
  AlertCircle, Eye, Wand2, FileText, ChevronDown, ChevronUp
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────

interface ScenarioEmail {
  subject: string;
  sender: string;
  senderRole?: string;
  body: string;
}

interface Scenario {
  id: string;
  label: string;
  category: string;
  difficulty: string;
  email: ScenarioEmail;
  goal: string;
  recommendedWords: [number, number];
}

interface Feedback {
  taskAchievement: ScoreField;
  clarity: ScoreField;
  grammar: ScoreField;
  vocabulary: ScoreField;
  tone: RatingField;
  organisation: ScoreField;
  overallLevel: string;
  subjectLine: RatingField;
  greeting: RatingField;
  closing: RatingField;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
}

// ── Categories ─────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "client", label: "Client Communication", icon: "💼" },
  { id: "sales", label: "Sales / Trade Fair", icon: "🤝" },
  { id: "office", label: "Executive / Office", icon: "🏢" },
  { id: "career", label: "Job / Career", icon: "🎯" },
];

// ── Scenarios ──────────────────────────────────────────────────────

const SCENARIOS: Scenario[] = [
  // CLIENT COMMUNICATION
  {
    id: "client-info-request", label: "Reply to Information Request", category: "client", difficulty: "B1",
    email: {
      subject: "Request for Information — Corporate Training Programmes",
      sender: "Laura Mitchell", senderRole: "HR Manager, Greenfield Industries",
      body: "Dear Sir/Madam,\n\nI am writing to enquire about your corporate English training programmes. We are a mid-sized manufacturing company based in Lyon and are looking to improve the English skills of our management team (approximately 12 people).\n\nCould you please provide the following information:\n1. Available training formats (in-person, online, hybrid)\n2. Typical programme duration and frequency\n3. Pricing for group training\n4. Whether you offer a needs assessment before the training begins\n\nWe would ideally like to start in September. Please let me know if you have availability.\n\nKind regards,\nLaura Mitchell"
    },
    goal: "Reply professionally, answer all four questions, and suggest next steps.",
    recommendedWords: [100, 160],
  },
  {
    id: "client-complaint", label: "Reply to a Complaint", category: "client", difficulty: "B2",
    email: {
      subject: "Complaint — Delayed Delivery Order #4782",
      sender: "James Hartley", senderRole: "Procurement Manager, TechVista Ltd",
      body: "Dear Customer Service,\n\nI am writing to express my dissatisfaction with the handling of our recent order (#4782). The delivery was originally scheduled for 15 March, but we have still not received the goods and it is now 28 March.\n\nThis delay has caused significant disruption to our production schedule. We have attempted to contact your logistics team twice without success.\n\nPlease provide an immediate update on the status of this order and explain what measures you will take to prevent this from happening again.\n\nI look forward to your prompt response.\n\nRegards,\nJames Hartley"
    },
    goal: "Apologise sincerely, explain the situation, offer a solution, and reassure the client.",
    recommendedWords: [120, 180],
  },
  {
    id: "client-meeting-confirm", label: "Confirm a Meeting", category: "client", difficulty: "B1",
    email: {
      subject: "Meeting Request — Q3 Review",
      sender: "Sophie Durand", senderRole: "Account Director, Altitude Media",
      body: "Hi,\n\nI hope you're doing well. I'd like to schedule a meeting to review the Q3 results and discuss our partnership moving forward.\n\nWould Thursday 10 October at 2pm work for you? I was thinking we could meet at your office, but I'm also happy to do it online.\n\nPlease let me know your preference and if there's anything you'd like me to prepare in advance.\n\nBest,\nSophie"
    },
    goal: "Confirm the meeting, specify the format, and mention any preparation items.",
    recommendedWords: [60, 100],
  },
  {
    id: "client-meeting-followup", label: "Follow Up After a Meeting", category: "client", difficulty: "B2",
    email: {
      subject: "Great meeting today",
      sender: "Marc Leblanc", senderRole: "CEO, NovaTech Solutions",
      body: "Hi,\n\nThank you for taking the time to meet with us this morning. I found the discussion very productive and I'm excited about the potential collaboration.\n\nAs discussed, could you send me the detailed proposal by end of next week? I'd also appreciate it if you could include references from similar projects.\n\nLooking forward to hearing from you.\n\nBest regards,\nMarc"
    },
    goal: "Thank them, confirm the agreed actions, and set clear expectations for next steps.",
    recommendedWords: [80, 130],
  },
  {
    id: "client-delay-apology", label: "Apologise for a Delay", category: "client", difficulty: "B1+",
    email: {
      subject: "Where is the report?",
      sender: "Elena Rossi", senderRole: "Project Manager, Rossi & Partners",
      body: "Hi,\n\nI'm following up on the market analysis report that was due last Friday. Our team needs it urgently to prepare for the board meeting next Monday.\n\nCould you please let me know when we can expect it?\n\nThanks,\nElena"
    },
    goal: "Apologise for the delay, give a clear delivery timeline, and reassure the client.",
    recommendedWords: [70, 120],
  },
  // SALES / TRADE FAIR
  {
    id: "sales-tradefair-followup", label: "Follow Up After a Trade Fair", category: "sales", difficulty: "B2",
    email: {
      subject: "Nice meeting you at Tech Expo 2025",
      sender: "David Chen", senderRole: "VP Business Development, Pacific Digital",
      body: "Hi,\n\nIt was a pleasure meeting you at the Tech Expo in Cannes last week. I was very interested in what you showed us about your new SaaS platform.\n\nCould you send me more information about pricing and implementation timelines? We're currently reviewing our options and would like to include your solution in our evaluation.\n\nBest,\nDavid"
    },
    goal: "Thank them warmly, provide requested information, and suggest a follow-up call.",
    recommendedWords: [100, 150],
  },
  {
    id: "sales-product-info", label: "Send Product Information", category: "sales", difficulty: "B1+",
    email: {
      subject: "Information request — Enterprise Plan",
      sender: "Anna Petrova", senderRole: "IT Director, Balkan Logistics Group",
      body: "Hello,\n\nWe are interested in your Enterprise plan. Could you please send detailed information including:\n- Features included in the Enterprise tier\n- Data security and GDPR compliance\n- Customer support options\n- Onboarding process\n\nWe have a team of about 200 users.\n\nThank you,\nAnna Petrova"
    },
    goal: "Provide clear and complete product information, and suggest a demo or meeting.",
    recommendedWords: [100, 160],
  },
  {
    id: "sales-pricing", label: "Answer a Pricing Question", category: "sales", difficulty: "B2",
    email: {
      subject: "Re: Quotation Request",
      sender: "Tom Richards", senderRole: "Finance Director, Nordic Steel AB",
      body: "Hi,\n\nThank you for the initial quote. However, the pricing seems higher than expected compared to similar solutions on the market.\n\nCould you break down the costs more clearly and let me know if there are any flexible options, such as annual billing discounts or a phased implementation?\n\nWe really like the product but need to justify the investment to our board.\n\nBest regards,\nTom"
    },
    goal: "Address the pricing concern professionally, highlight value, and offer flexible options.",
    recommendedWords: [110, 170],
  },
  {
    id: "sales-quotation-followup", label: "Follow Up on a Quotation", category: "sales", difficulty: "B1+",
    email: {
      subject: "Following up on our quotation",
      sender: "You (Sales Representative)",
      body: "Context: You sent a quotation to Isabelle Martin at Côte d'Azur Events three weeks ago. She hasn't responded. Write a polite, professional follow-up email to check if she has any questions and to keep the conversation moving.\n\nNote: This is a prompted scenario — there is no incoming email. Write the follow-up from scratch."
    },
    goal: "Write a polite follow-up that re-engages the prospect without being pushy.",
    recommendedWords: [80, 130],
  },
  {
    id: "sales-hesitant-prospect", label: "Handle a Hesitant Prospect", category: "sales", difficulty: "B2",
    email: {
      subject: "Re: Our conversation",
      sender: "Fabien Moreau", senderRole: "Operations Director, Moreau Transports",
      body: "Hi,\n\nThank you for the presentation. The solution looks interesting, but honestly, we're not sure the timing is right for us. We have a lot going on internally and I'm worried about the disruption a new system could cause.\n\nI'll keep your details on file.\n\nBest,\nFabien"
    },
    goal: "Acknowledge concerns, gently address objections, and suggest a low-commitment next step.",
    recommendedWords: [100, 150],
  },
  // EXECUTIVE / OFFICE
  {
    id: "office-reschedule", label: "Reschedule an Appointment", category: "office", difficulty: "B1",
    email: {
      subject: "Tomorrow's meeting",
      sender: "Catherine Blanc", senderRole: "Regional Director",
      body: "Hi,\n\nUnfortunately I need to reschedule our meeting planned for tomorrow at 10am. Something urgent has come up and I won't be available until the afternoon.\n\nCould you suggest an alternative time this week?\n\nApologies for the inconvenience.\n\nCatherine"
    },
    goal: "Acknowledge, suggest alternative times, and maintain a professional tone.",
    recommendedWords: [50, 90],
  },
  {
    id: "office-travel", label: "Confirm Travel Arrangements", category: "office", difficulty: "B1",
    email: {
      subject: "London trip — logistics",
      sender: "Paul Bernard", senderRole: "Managing Director",
      body: "Hi,\n\nCan you please confirm the arrangements for my London trip next week?\n\nI need:\n- Flight details (departure and return)\n- Hotel booking confirmation\n- Transfer from airport to hotel\n- Meeting schedule for Tuesday and Wednesday\n\nPlease send everything by end of day Thursday.\n\nThanks,\nPaul"
    },
    goal: "Confirm all arrangements clearly, note any pending items, and reassure the director.",
    recommendedWords: [90, 140],
  },
  {
    id: "office-colleague", label: "Reply to an Internal Colleague", category: "office", difficulty: "B1",
    email: {
      subject: "Project update needed",
      sender: "Karen Williams", senderRole: "Marketing Manager",
      body: "Hey,\n\nQuick question — could you send me a short update on the website redesign project? I need to include it in the monthly report that's due Friday.\n\nJust the key milestones and any blockers would be great.\n\nThanks!\nKaren"
    },
    goal: "Provide a clear, concise project update with milestones and any issues.",
    recommendedWords: [70, 120],
  },
  {
    id: "office-status-update", label: "Send a Status Update", category: "office", difficulty: "B1+",
    email: {
      subject: "Weekly status update request",
      sender: "Director",
      body: "Context: Your director has asked all team leads to send a weekly status update every Friday. Write this week's update covering: progress on current projects, any issues or delays, and plans for next week.\n\nNote: This is a prompted scenario — write the update email from scratch."
    },
    goal: "Write a clear, structured status update covering progress, issues, and next steps.",
    recommendedWords: [100, 160],
  },
  {
    id: "office-clarification", label: "Request Clarification", category: "office", difficulty: "B1+",
    email: {
      subject: "New procedures",
      sender: "HR Department",
      body: "Dear all,\n\nPlease note that starting from 1 April, all expense claims must be submitted through the new digital platform. Training sessions will be organised soon.\n\nAll claims submitted after the deadline will require manager approval and may take up to 30 working days to process.\n\nPlease ensure you comply with the new process.\n\nHR Department"
    },
    goal: "Reply to HR requesting clarification on specific points (e.g., deadline, training dates, access).",
    recommendedWords: [60, 100],
  },
  // JOB / CAREER
  {
    id: "career-interview-reply", label: "Reply to an Interview Invitation", category: "career", difficulty: "B1+",
    email: {
      subject: "Interview Invitation — Marketing Coordinator Position",
      sender: "Rebecca Stone", senderRole: "HR Coordinator, Atlas International",
      body: "Dear Candidate,\n\nThank you for your application for the Marketing Coordinator position at Atlas International.\n\nWe would like to invite you for an interview on Wednesday 12 March at 10:00am at our offices in Nice. The interview will last approximately 45 minutes and will be conducted in English.\n\nPlease confirm your attendance at your earliest convenience. If the proposed date is not suitable, please suggest an alternative.\n\nKind regards,\nRebecca Stone"
    },
    goal: "Confirm attendance enthusiastically and professionally, or propose an alternative if needed.",
    recommendedWords: [60, 100],
  },
  {
    id: "career-interview-followup", label: "Follow Up After an Interview", category: "career", difficulty: "B2",
    email: {
      subject: "Follow-up after interview",
      sender: "You (Candidate)",
      body: "Context: You had an interview two days ago for a Senior Project Manager role at Côte d'Azur Consulting. The interview went well. The panel included the HR Director and the CEO. Write a professional follow-up thank-you email.\n\nNote: This is a prompted scenario — write the follow-up from scratch."
    },
    goal: "Thank the interviewers, reference specific discussion points, and express continued interest.",
    recommendedWords: [80, 130],
  },
  {
    id: "career-recruiter", label: "Reply to a Recruiter", category: "career", difficulty: "B1+",
    email: {
      subject: "Exciting opportunity — Senior Developer role",
      sender: "Michael Torres", senderRole: "Recruiter, TalentBridge",
      body: "Hi,\n\nI came across your profile on LinkedIn and thought you'd be a great fit for a Senior Developer position with one of our key clients, a fast-growing fintech company based in Paris.\n\nThe role offers remote work, a competitive salary, and excellent growth opportunities.\n\nWould you be interested in learning more? I'd love to set up a 15-minute call this week.\n\nBest,\nMichael"
    },
    goal: "Reply professionally, express interest or politely decline, and suggest availability if interested.",
    recommendedWords: [60, 100],
  },
  {
    id: "career-more-info", label: "Ask for More Information About a Position", category: "career", difficulty: "B1+",
    email: {
      subject: "Job Opening — Business Analyst",
      sender: "Recruitment Team", senderRole: "Horizon Consulting",
      body: "Dear Applicant,\n\nThank you for your interest in the Business Analyst role at Horizon Consulting.\n\nThe position involves working closely with our strategy team on client-facing projects. We offer a competitive package including health insurance and performance bonuses.\n\nPlease find the full job description attached. Do not hesitate to contact us if you have any questions.\n\nBest regards,\nRecruitment Team"
    },
    goal: "Reply asking specific questions about the role (e.g., team size, travel, start date, remote options).",
    recommendedWords: [70, 110],
  },
];

// ── Edge function URL ──────────────────────────────────────────────

const FN_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/email-reply-trainer`;

// ── Component ──────────────────────────────────────────────────────

type Step = "select" | "write" | "feedback";

const EmailReplyTrainer: React.FC = () => {
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("email");
  const [step, setStep] = useState<Step>("select");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [learnerSubject, setLearnerSubject] = useState("");
  const [learnerReply, setLearnerReply] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [modelAnswer, setModelAnswer] = useState<string | null>(null);
  const [improvedReply, setImprovedReply] = useState<string | null>(null);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showImprovedReply, setShowImprovedReply] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingModel, setLoadingModel] = useState(false);
  const [loadingImprove, setLoadingImprove] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [startedAt] = useState(() => new Date().toISOString());
  const [sessionSaved, setSessionSaved] = useState(false);

  const wordCount = useMemo(() => {
    const trimmed = learnerReply.trim();
    return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
  }, [learnerReply]);

  const filteredScenarios = useMemo(() => {
    if (!selectedCategory) return SCENARIOS;
    return SCENARIOS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const selectScenario = (s: Scenario) => {
    setScenario(s);
    setStep("write");
    setLearnerSubject("");
    setLearnerReply("");
    setFeedback(null);
    setModelAnswer(null);
    setImprovedReply(null);
    setShowModelAnswer(false);
    setShowImprovedReply(false);
    setError(null);
    setSessionSaved(false);
  };

  const requestPayload = useCallback(() => ({
    incomingEmail: scenario!.email,
    learnerReply,
    learnerSubject,
    scenarioGoal: scenario!.goal,
  }), [scenario, learnerReply, learnerSubject]);

  const saveSession = useCallback(async (fb: Feedback | null, ma?: string | null, ir?: string | null) => {
    if (sessionSaved || !scenario) return;
    try {
      const { error: dbErr } = await supabase.from("email_training_sessions" as any).insert({
        session_id: sessionId,
        scenario: scenario.id,
        category: scenario.category,
        learner_subject: learnerSubject,
        learner_reply: learnerReply,
        feedback: fb as any,
        model_answer: ma || null,
        improved_reply: ir || null,
        started_at: startedAt,
        completed_at: new Date().toISOString(),
        overall_level: fb?.overallLevel || null,
      } as any);
      if (!dbErr) setSessionSaved(true);
      else console.error("Session save error:", dbErr);
    } catch (e) {
      console.error("Session save exception:", e);
    }
  }, [sessionSaved, scenario, sessionId, learnerSubject, learnerReply, startedAt]);

  const submitForFeedback = async () => {
    if (!scenario) return;
    if (limitReached) {
      toast.error(`Daily limit reached (${DAILY_LIMIT} sessions per 24h). Please come back tomorrow!`);
      return;
    }
    recordSession();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ action: "feedback", ...requestPayload() }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Failed to get feedback");
      }
      const data = await res.json();
      setFeedback(data.feedback);
      setStep("feedback");
      await saveSession(data.feedback);
    } catch (e: any) {
      setError(e.message || "Could not generate feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const requestModelAnswer = async () => {
    if (!scenario || loadingModel) return;
    setLoadingModel(true);
    try {
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ action: "model-answer", ...requestPayload() }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setModelAnswer(data.modelAnswer);
      setShowModelAnswer(true);
    } catch {
      setModelAnswer("Could not generate a model answer. Please try again.");
      setShowModelAnswer(true);
    } finally {
      setLoadingModel(false);
    }
  };

  const requestImproveReply = async () => {
    if (!scenario || loadingImprove) return;
    setLoadingImprove(true);
    try {
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ action: "improve-reply", ...requestPayload() }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setImprovedReply(data.improvedReply);
      setShowImprovedReply(true);
    } catch {
      setImprovedReply("Could not generate an improved version. Please try again.");
      setShowImprovedReply(true);
    } finally {
      setLoadingImprove(false);
    }
  };

  const retryScenario = () => {
    setStep("write");
    setLearnerSubject("");
    setLearnerReply("");
    setFeedback(null);
    setModelAnswer(null);
    setImprovedReply(null);
    setShowModelAnswer(false);
    setShowImprovedReply(false);
    setError(null);
    setSessionSaved(false);
  };

  const chooseAnotherScenario = () => {
    setStep("select");
    setScenario(null);
    setSelectedCategory(null);
    setLearnerSubject("");
    setLearnerReply("");
    setFeedback(null);
    setModelAnswer(null);
    setImprovedReply(null);
    setShowModelAnswer(false);
    setShowImprovedReply(false);
    setError(null);
    setSessionSaved(false);
  };

  // ── Render helpers ─────────────────────────────────────

  // ScoreBar and RatingBadge now imported from shared components

  // ── Scenario Selection ─────────────────────────────────

  if (step === "select") {
    return (
      <>
        <SEOHead
          title="AI Email Reply Trainer | Practice Professional Email Writing"
          description="Improve your business English emails with AI feedback. Practice replying to realistic professional emails and receive detailed analysis of your writing."
          canonical="https://www.antonyaddy.com/email-trainer"
          keywords={["business email English", "email writing practice", "professional email training", "AI email feedback"]}
        />
        <div className="min-h-screen bg-background py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Mail className="w-4 h-4" />
                AI Email Reply Trainer
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Practice Professional Email Writing
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Read a realistic business email, write your reply, and get detailed AI feedback on your writing — grammar, tone, clarity, and more.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon} {cat.label}
                </Button>
              ))}
            </div>

            {/* Scenario cards */}
            <div className="grid gap-3 md:grid-cols-2">
              {filteredScenarios.map((s) => (
                <Card
                  key={s.id}
                  className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all group"
                  onClick={() => selectScenario(s)}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                        {s.label}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">{s.email.subject}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">{s.difficulty}</Badge>
                        <span className="text-xs text-muted-foreground">{s.recommendedWords[0]}–{s.recommendedWords[1]} words</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-3" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Link back */}
            <div className="text-center mt-10">
              <Link to="/conversation-trainer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                AI Conversation Trainer
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Writing Step ───────────────────────────────────────

  if (step === "write" && scenario) {
    return (
      <>
        <SEOHead
          title={`${scenario.label} — AI Email Reply Trainer`}
          description={scenario.goal}
          noIndex
        />
        <div className="min-h-screen bg-background py-6 md:py-10">
          <div className="max-w-3xl mx-auto px-4">
            {/* Back */}
            <button onClick={chooseAnotherScenario} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Choose another scenario
            </button>

            {/* Incoming Email */}
            <Card className="mb-6 border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="w-3.5 h-3.5" />
                  Incoming Email
                </div>
                <CardTitle className="text-base md:text-lg">{scenario.email.subject}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  From: <span className="font-medium text-foreground">{scenario.email.sender}</span>
                  {scenario.email.senderRole && <span> — {scenario.email.senderRole}</span>}
                </p>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed bg-muted/50 rounded-lg p-4">
                  {scenario.email.body}
                </div>
              </CardContent>
            </Card>

            {/* Goal */}
            <div className="bg-primary/5 border border-primary/15 rounded-lg p-4 mb-6">
              <p className="text-sm font-medium text-primary mb-1">📝 Your task</p>
              <p className="text-sm text-foreground">{scenario.goal}</p>
              <p className="text-xs text-muted-foreground mt-1">Target: {scenario.recommendedWords[0]}–{scenario.recommendedWords[1]} words</p>
            </div>

            {/* Tips */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💡 Tips</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Answer all points raised in the email</li>
                <li>• Keep a professional, appropriate tone</li>
                <li>• Structure your email clearly (greeting, body, closing)</li>
                <li>• Include a suitable closing line</li>
              </ul>
            </div>

            {/* Reply form */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Your Reply
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Subject line (optional)</label>
                  <Input
                    placeholder="Re: ..."
                    value={learnerSubject}
                    onChange={(e) => setLearnerSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Your email reply</label>
                  <Textarea
                    placeholder="Write your professional email reply here..."
                    value={learnerReply}
                    onChange={(e) => setLearnerReply(e.target.value)}
                    rows={10}
                    className="resize-y min-h-[200px]"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>
                      {wordCount} word{wordCount !== 1 ? "s" : ""}
                      {wordCount > 0 && (
                        <span className={wordCount >= scenario.recommendedWords[0] && wordCount <= scenario.recommendedWords[1] ? " text-primary" : " text-amber-500"}>
                          {" "}(target: {scenario.recommendedWords[0]}–{scenario.recommendedWords[1]})
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2 p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    {error}
                  </div>
                )}

                <Button
                  onClick={submitForFeedback}
                  disabled={loading || learnerReply.trim().length === 0}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin mr-2" />
                      Analysing your reply…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit for AI Feedback
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // ── Feedback Step ──────────────────────────────────────

  if (step === "feedback" && feedback && scenario) {
    return (
      <>
        <SEOHead title="Your Feedback — AI Email Reply Trainer" noIndex />
        <div className="min-h-screen bg-background py-6 md:py-10">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                <CheckCircle className="w-4 h-4" />
                Feedback Ready
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Your Email Writing Feedback</h2>
              {feedback.overallLevel && (
                <Badge className="mt-2 text-sm" variant="default">CEFR Level: {feedback.overallLevel}</Badge>
              )}
            </div>

            {/* Score cards */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-foreground text-lg">Scores</h3>
                <ScoreBar score={feedback.taskAchievement.score} label="Task Achievement" />
                {feedback.taskAchievement.comment && <p className="text-xs text-muted-foreground pl-1">{feedback.taskAchievement.comment}</p>}
                <ScoreBar score={feedback.clarity.score} label="Clarity" />
                {feedback.clarity.comment && <p className="text-xs text-muted-foreground pl-1">{feedback.clarity.comment}</p>}
                <ScoreBar score={feedback.grammar.score} label="Grammar" />
                {feedback.grammar.comment && <p className="text-xs text-muted-foreground pl-1">{feedback.grammar.comment}</p>}
                <ScoreBar score={feedback.vocabulary.score} label="Vocabulary" />
                {feedback.vocabulary.comment && <p className="text-xs text-muted-foreground pl-1">{feedback.vocabulary.comment}</p>}
                <ScoreBar score={feedback.organisation.score} label="Organisation" />
                {feedback.organisation.comment && <p className="text-xs text-muted-foreground pl-1">{feedback.organisation.comment}</p>}
              </CardContent>
            </Card>

            {/* Ratings */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-foreground text-lg">Tone & Formatting</h3>
                {feedback.tone.rating && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tone</span>
                    <div className="flex items-center gap-2">
                      <RatingBadge rating={feedback.tone.rating} />
                    </div>
                  </div>
                )}
                {feedback.tone.comment && <p className="text-xs text-muted-foreground">{feedback.tone.comment}</p>}
                {feedback.subjectLine.rating && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Subject Line</span>
                    <RatingBadge rating={feedback.subjectLine.rating} />
                  </div>
                )}
                {feedback.subjectLine.comment && <p className="text-xs text-muted-foreground">{feedback.subjectLine.comment}</p>}
                {feedback.greeting.rating && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Greeting</span>
                    <RatingBadge rating={feedback.greeting.rating} />
                  </div>
                )}
                {feedback.greeting.comment && <p className="text-xs text-muted-foreground">{feedback.greeting.comment}</p>}
                {feedback.closing.rating && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Closing</span>
                    <RatingBadge rating={feedback.closing.rating} />
                  </div>
                )}
                {feedback.closing.comment && <p className="text-xs text-muted-foreground">{feedback.closing.comment}</p>}
              </CardContent>
            </Card>

            <CorrectionsList corrections={feedback.corrections} variant="card" />
            <SuggestionsList suggestions={feedback.suggestions} variant="card" />
            <VocabUpgrades items={feedback.advancedVocabulary} variant="card" />
            <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} overall={feedback.overall} variant="card" />

            {/* Model Answer */}
            <div className="space-y-3">
              {!showModelAnswer && (
                <Button variant="outline" className="w-full" onClick={requestModelAnswer} disabled={loadingModel}>
                  {loadingModel ? (
                    <><Sparkles className="w-4 h-4 animate-spin mr-2" />Generating model answer…</>
                  ) : (
                    <><Eye className="w-4 h-4 mr-2" />Show Model Answer</>
                  )}
                </Button>
              )}
              {showModelAnswer && modelAnswer && (
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Model Answer
                    </h3>
                    <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed bg-primary/5 rounded-lg p-4">
                      {modelAnswer}
                    </div>
                  </CardContent>
                </Card>
              )}

              {!showImprovedReply && (
                <Button variant="outline" className="w-full" onClick={requestImproveReply} disabled={loadingImprove}>
                  {loadingImprove ? (
                    <><Sparkles className="w-4 h-4 animate-spin mr-2" />Improving your reply…</>
                  ) : (
                    <><Wand2 className="w-4 h-4 mr-2" />Improve My Reply</>
                  )}
                </Button>
              )}
              {showImprovedReply && improvedReply && (
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                      <Wand2 className="w-5 h-5 text-primary" />
                      Improved Version of Your Reply
                    </h3>
                    <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed bg-primary/5 rounded-lg p-4">
                      {improvedReply}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Post-feedback CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button onClick={retryScenario} variant="default" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retry This Email
              </Button>
              <Button onClick={chooseAnotherScenario} variant="outline" className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Choose Another Scenario
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/conversation-trainer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Trainer Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default EmailReplyTrainer;
