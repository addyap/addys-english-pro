import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen, Headphones, PenTool, MessageSquare, Brain,
  Award, Mic, Mail, Presentation, Handshake, Users,
  Lightbulb, ArrowRight, Sparkles, BookOpenCheck, FileText
} from 'lucide-react';

const EXERCISE_CATEGORIES = [
  {
    title: "Exercices de grammaire",
    description: "Plus de 150 exercices couvrant tous les niveaux, du présent simple aux conditionnels avancés.",
    icon: BookOpen,
    count: "150+",
    path: "/exercices",
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Compréhension orale",
    description: "Exercices d'écoute avec transcription, glossaire multilingue et audio natif.",
    icon: Headphones,
    count: "10+",
    path: "/exercices/listening",
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "Compréhension écrite",
    description: "Passages de lecture avec questions de compréhension pour tous les niveaux CECRL.",
    icon: FileText,
    count: "10+",
    path: "/reading",
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "Exercices d'écriture",
    description: "Reformulation, rédaction libre et exercices de transformation de phrases.",
    icon: PenTool,
    count: "20+",
    path: "/exercices/writing/transform/1",
    color: "text-orange-600 bg-orange-50"
  },
  {
    title: "Histoires interactives",
    description: "Apprenez l'anglais à travers des récits interactifs avec choix multiples.",
    icon: BookOpenCheck,
    count: "5+",
    path: "/story/1",
    color: "text-pink-600 bg-pink-50"
  },
];

const AI_TOOLS = [
  {
    title: "AI Conversation Trainer",
    description: "Pratiquez des conversations professionnelles en anglais avec un partenaire IA.",
    icon: MessageSquare,
    path: "/conversation-trainer",
  },
  {
    title: "AI Writing Coach",
    description: "Soumettez un texte et recevez des corrections détaillées et suggestions.",
    icon: PenTool,
    path: "/writing-coach",
  },
  {
    title: "AI Speaking Practice",
    description: "Entraînez votre prononciation et fluidité avec reconnaissance vocale.",
    icon: Mic,
    path: "/speaking-practice",
  },
  {
    title: "AI Grammar Explainer",
    description: "Posez n'importe quelle question de grammaire et obtenez une explication claire.",
    icon: Lightbulb,
    path: "/grammar-explainer",
  },
  {
    title: "AI Email Reply Trainer",
    description: "Apprenez à rédiger des emails professionnels avec feedback IA.",
    icon: Mail,
    path: "/email-trainer",
  },
  {
    title: "AI Presentation Trainer",
    description: "Préparez vos présentations en anglais avec coaching IA.",
    icon: Presentation,
    path: "/presentation-trainer",
  },
  {
    title: "AI Negotiation Trainer",
    description: "Simulez des négociations professionnelles en anglais.",
    icon: Handshake,
    path: "/negotiation-trainer",
  },
  {
    title: "AI Interview Simulator",
    description: "Préparez vos entretiens d'embauche en anglais avec simulation IA.",
    icon: Users,
    path: "/interview-simulator",
  },
];

export default function RessourcesGratuites() {
  return (
    <>
      <SEOHead
        title="Ressources Gratuites pour Apprendre l'Anglais | Antony Addy"
        description="Découvrez plus de 400 exercices gratuits, 8 outils IA et la préparation CLOE pour progresser en anglais professionnel. Tous niveaux A1-C2."
        canonicalUrl="https://www.antonyaddy.com/ressources-gratuites"
        keywords="exercices anglais gratuits, outils IA anglais, préparation CLOE, apprendre anglais professionnel, ressources gratuites anglais"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" /> 100% Gratuit
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            Ressources Gratuites pour Apprendre l'Anglais
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Plus de <strong>400 exercices</strong>, <strong>8 outils IA</strong> et un programme complet de 
            préparation à la <strong>certification CLOE</strong>. Progressez à votre rythme, 
            du niveau A1 au C2, sans inscription requise.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "400+", label: "Exercices" },
            { value: "3 130+", label: "Questions" },
            { value: "8", label: "Outils IA" },
            { value: "A1→C2", label: "Tous niveaux" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercises Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-2 font-heading">📚 Exercices Interactifs</h2>
          <p className="text-muted-foreground mb-8">
            Grammaire, vocabulaire, compréhension orale et écrite — pratiquez l'anglais avec des exercices 
            autocorrectifs et un suivi de progression.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXERCISE_CATEGORIES.map((cat) => (
              <Link key={cat.path} to={cat.path} className="group">
                <Card className="h-full hover:shadow-md transition-all hover:border-primary/30">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${cat.color}`}>
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {cat.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/exercices"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Voir tous les exercices <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOE Section */}
      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-2 font-heading">🎯 Préparation CLOE</h2>
          <p className="text-muted-foreground mb-6">
            La certification CLOE est éligible au CPF et reconnue par les employeurs. 
            Préparez-vous gratuitement avec nos exercices ciblés et tests blancs chronométrés.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/exercices/cloe-preparation" className="group">
              <Card className="h-full hover:shadow-md transition-all hover:border-primary/30">
                <CardContent className="p-5 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Exercices CLOE</h3>
                  <p className="text-xs text-muted-foreground">90+ exercices par niveau et catégorie</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/exercices/cloe-preparation/practice-test" className="group">
              <Card className="h-full hover:shadow-md transition-all hover:border-primary/30">
                <CardContent className="p-5 text-center">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Tests blancs</h3>
                  <p className="text-xs text-muted-foreground">Simulations chronométrées en conditions réelles</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/exercices/cloe-preparation/overview" className="group">
              <Card className="h-full hover:shadow-md transition-all hover:border-primary/30">
                <CardContent className="p-5 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Guide CLOE</h3>
                  <p className="text-xs text-muted-foreground">Tout savoir sur la certification CLOE</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-2 font-heading">🤖 8 Outils IA Gratuits</h2>
          <p className="text-muted-foreground mb-8">
            Entraînez-vous avec l'intelligence artificielle : conversations, rédaction, présentations, 
            négociations et plus encore. Feedback personnalisé et instantané.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {AI_TOOLS.map((tool) => (
              <Link key={tool.path} to={tool.path} className="group">
                <Card className="h-full hover:shadow-md transition-all hover:border-primary/30">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <tool.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                        {tool.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/blog/outils-ia-anglais-professionnel"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Lire l'article sur nos outils IA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard + CTA */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-3 font-heading">📊 Suivez votre progression</h2>
          <p className="text-muted-foreground mb-6">
            Votre tableau de bord personnel suit automatiquement vos scores, badges et exercices complétés.
            Aucune inscription nécessaire — vos données sont sauvegardées localement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Mon tableau de bord <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/offres-de-formation"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Découvrir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
