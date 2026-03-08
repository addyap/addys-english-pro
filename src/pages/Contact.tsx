import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { trackFormSubmission, trackFormError, trackWhatsAppClick, trackEmailClick } from '@/lib/analytics';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Antony Addy",
    "description": "Contactez Antony Addy pour vos besoins en formation d'anglais professionnel",
    "url": "https://www.antonyaddy.com/contact"
  };

  useScrollTracking('/contact');

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (spam prevention)
    if (formData.honeypot) {
      console.log('Spam detected');
      trackFormError('contact', 'spam_detected');
      return;
    }

    if (!validateForm()) {
      trackFormError('contact', 'validation_failed');
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          prenom: formData.prenom.trim(),
          nom: formData.nom.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      if (error) {
        throw new Error(error.message || 'Erreur lors de l\'envoi');
      }

      console.log('Contact form submitted successfully:', data);
      trackFormSubmission('contact', true);
      
      setSubmitSuccess(true);
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        message: '',
        honeypot: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormError('contact', 'submission_failed');
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return <>
      <SEOHead 
        title="Contact | Devis Formation Anglais Gratuit"
        description="Contactez Antony Addy pour vos formations d'anglais professionnel. Réponse sous 24h par email, WhatsApp ou formulaire. Devis gratuit."
        keywords={["contact formateur anglais", "devis formation", "WhatsApp", "email formations"]}
        canonicalUrl="https://www.antonyaddy.com/contact"
        image="https://www.antonyaddy.com/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png"
        imageAlt="QR Code LinkedIn pour contacter Antony Addy"
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={[contactJsonLd, {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "formations@antonyaddy.com",
            availableLanguage: ["French", "English"],
            areaServed: "FR"
          }
        }]}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prenons contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premier échange gratuit et sans engagement pour définir vos objectifs en anglais professionnel
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from real users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      id="prenom" 
                      name="prenom" 
                      value={formData.prenom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      value={formData.nom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Décrivez vos besoins en formation, votre niveau actuel, vos objectifs..." 
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errors.submit}
                  </div>
                )}

                {submitSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Message envoyé avec succès ! Je vous recontacte rapidement.</span>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg" 
                  aria-label="Envoyer le message de contact"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Réponse sous 24h • Présentiel Alpes-Maritimes • Distanciel France entière
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-900">
                    Contact rapide via WhatsApp
                  </h3>
                </div>
                <p className="text-green-800 mb-4">
                  Pour une réponse immédiate, contactez-moi directement sur WhatsApp
                </p>
                <a 
                  href="https://wa.me/33649829826" 
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:scale-105 active:scale-95" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Contactez-moi via WhatsApp"
                  onClick={trackWhatsAppClick}
                >
                  <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
                  Ouvrir WhatsApp
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a 
                        href="mailto:formations@antonyaddy.com" 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        onClick={trackEmailClick}
                      >
                        formations@antonyaddy.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Zone d'intervention</p>
                      <p className="text-gray-600">
                        Présentiel : Alpes-Maritimes & Var<br />
                        Distanciel : France entière
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Horaires</p>
                      <p className="text-gray-600">
                        Lun-Ven : 9h-18h<br />
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn QR Code */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connectons-nous sur LinkedIn
                </h3>
                <img src="/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png" alt="QR Code LinkedIn permettant de se connecter au profil d'Antony Addy" className="mx-auto mb-4 max-w-48" width="192" height="192" loading="lazy" />
                <p className="text-sm text-gray-600">
                  Scannez ce QR code pour me suivre sur LinkedIn
                </p>
                <a href="https://linkedin.com/in/antonyaddy" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded" target="_blank" rel="noopener noreferrer" aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)">
                  Voir mon profil LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Contact;
