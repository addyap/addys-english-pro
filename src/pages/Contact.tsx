
import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Message envoyé ! Je vous recontacte rapidement.');
    setFormData({ prenom: '', nom: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEOHead {...seoMetadata.contact} />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contactez-moi pour discuter de vos besoins en formation d'anglais professionnel
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Réponse rapide. Présentiel dans le Var. Distanciel France entière.
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
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
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
                      <a href="mailto:hello@antonyaddy.com" className="text-blue-600 hover:text-blue-800">
                        hello@antonyaddy.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Zone d'intervention</p>
                      <p className="text-gray-600">
                        Présentiel : Var (Fréjus, Saint-Raphaël, Draguignan)<br />
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
                <img
                  src="/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png"
                  alt="QR Code LinkedIn Antony Addy"
                  className="mx-auto mb-4 max-w-48"
                />
                <p className="text-sm text-gray-600">
                  Scannez ce QR code pour me suivre sur LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/antonyaddy"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir mon profil LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
