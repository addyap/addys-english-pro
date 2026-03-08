import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  prenom: string;
  nom: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prenom, nom, email, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!prenom || !nom || !email || !message) {
      console.error("Missing required fields:", { prenom: !!prenom, nom: !!nom, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Format d'email invalide" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact email from:", email, "Name:", prenom, nom);

    // Send notification email to Antony
    const notificationResponse = await resend.emails.send({
      from: "Contact Form <contact@antonyaddy.com>",
      to: ["formations@antonyaddy.com"],
      replyTo: email,
      subject: `Nouveau message de ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nouveau message depuis le formulaire de contact
          </h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
            <h2 style="color: #374151; margin-top: 0;">Message :</h2>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact de antonyaddy.com
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Antony Addy <contact@antonyaddy.com>",
      to: [email],
      subject: "Merci pour votre message - Antony Addy Formations",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af;">Merci pour votre message, ${prenom} !</h1>
          
          <p>J'ai bien reçu votre demande et je vous recontacterai dans les plus brefs délais (généralement sous 24h).</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #374151; margin-top: 0;">Récapitulatif de votre message :</h2>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
          
          <p>En attendant, n'hésitez pas à :</p>
          <ul>
            <li><a href="https://www.antonyaddy.com/exercices" style="color: #1e40af;">Découvrir nos exercices gratuits</a></li>
            <li><a href="https://www.antonyaddy.com/blog" style="color: #1e40af;">Lire nos articles sur la grammaire anglaise</a></li>
            <li><a href="https://wa.me/33649829826" style="color: #16a34a;">Me contacter sur WhatsApp</a> pour une réponse plus rapide</li>
          </ul>
          
          <p>À très bientôt !</p>
          <p><strong>Antony Addy</strong><br>
          Formateur d'anglais professionnel</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Antony Addy - Formations d'anglais professionnel<br>
            Email: formations@antonyaddy.com<br>
            Site: <a href="https://antonyaddy.com" style="color: #1e40af;">antonyaddy.com</a>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails envoyés avec succès" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
