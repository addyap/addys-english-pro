import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Headphones, 
  MessageSquare, 
  FileText, 
  Clock, 
  Award, 
  CheckCircle, 
  ChevronRight,
  Target,
  Users,
  GraduationCap,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const CLOEOverview = () => {

  const writtenSkills = [
    { icon: BookOpen, title: 'Vocabulaire', titleEn: 'Vocabulary', questions: 10 },
    { icon: FileText, title: 'Grammaire et Syntaxe', titleEn: 'Grammar & Syntax', questions: 10 },
    { icon: MessageSquare, title: 'Expressions', titleEn: 'Expressions', questions: 10 },
    { icon: FileText, title: 'Compréhension de textes', titleEn: 'Reading Comprehension', questions: 10 },
    { icon: Headphones, title: 'Compréhension orale', titleEn: 'Listening Comprehension', questions: 10 }
  ];

  const oralSkills = [
    { title: 'Maîtrise et étendue du vocabulaire', titleEn: 'Vocabulary range and accuracy' },
    { title: 'Grammaire et syntaxe', titleEn: 'Grammar and syntax' },
    { title: 'Aisance et fluidité', titleEn: 'Fluency and ease' },
    { title: 'Prononciation et intonation', titleEn: 'Pronunciation and intonation' },
    { title: 'Qualité de l\'interaction', titleEn: 'Quality of interaction' }
  ];

  const cefrLevels = [
    { level: 'A1', name: 'Débutant', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { level: 'A2', name: 'Élémentaire', color: 'bg-teal-100 text-teal-700 border-teal-200' },
    { level: 'B1', name: 'Intermédiaire', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { level: 'B2', name: 'Intermédiaire+', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { level: 'C1', name: 'Avancé', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { level: 'C2', name: 'Maîtrise', color: 'bg-pink-100 text-pink-700 border-pink-200' }
  ];

  return (
    <>
      <Helmet>
        <title>Certification CLOE Anglais - Présentation et Format | Antony Addy</title>
        <meta name="description" content="Découvrez la certification CLOE (Compétences Linguistiques Orales et Ecrites) : format d'examen, compétences évaluées, niveaux CECRL et conseils de préparation pour réussir votre certification d'anglais professionnel." />
        <link rel="canonical" href="https://www.antonyaddy.com/exercices/cloe-preparation/overview" />
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Certification professionnelle
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                Certification CLOE Anglais
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
                <strong>C</strong>ompétences <strong>L</strong>inguistiques <strong>O</strong>rales et <strong>E</strong>crites
              </p>
              <p className="text-muted-foreground mt-2">
                La certification de référence pour valider vos compétences en anglais professionnel
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/exercices/cloe-preparation">
                <Button size="lg" className="gap-2">
                  <Target className="h-5 w-5" />
                  Commencer la préparation
                </Button>
              </Link>
              <Link to="/offres-de-formation">
                <Button variant="outline" size="lg" className="gap-2">
                  <Users className="h-5 w-5" />
                  Formation accompagnée
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is CLOE Section */}
        <section className="py-12 bg-background">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Award className="h-5 w-5 text-primary" />
                    Qu'est-ce que la certification CLOE ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <p>
                    La <strong>Certification CLOE</strong> (Compétences Linguistiques Orales et Ecrites) est délivrée par 
                    <strong> CCI France</strong>. Elle certifie vos capacités à communiquer en anglais dans un 
                    environnement professionnel multilingue.
                  </p>
                  <p>
                    Cette certification est reconnue et inscrite au <strong>Répertoire Spécifique</strong> de 
                    France Compétences, ce qui permet son financement via le <strong>CPF</strong> (Compte Personnel de Formation).
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Éligible au financement CPF</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-heading">
                    <Clock className="h-5 w-5 text-accent" />
                    Format de l'examen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Partie écrite</h4>
                      <p className="text-sm text-muted-foreground">~50 minutes, 50 questions adaptatives en ligne</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 rounded-full p-2">
                      <MessageSquare className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Partie orale</h4>
                      <p className="text-sm text-muted-foreground">15-20 minutes, entretien individuel par visioconférence</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Les deux parties sont indissociables et passées sous surveillance en ligne via webcam.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Written Test Details */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Épreuve écrite : 5 compétences évaluées
              </h2>
              <p className="text-muted-foreground">50 questions adaptatives réparties sur 5 domaines</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {writtenSkills.map((skill, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-3">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 font-heading">{skill.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{skill.titleEn}</p>
                    <Badge variant="secondary">{skill.questions} questions</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 dark:from-amber-900/20 dark:to-orange-900/20 dark:border-amber-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Test adaptatif</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      Le test CLOE est <strong>adaptatif</strong> : la difficulté des questions s'ajuste en fonction 
                      de vos réponses. Si vous répondez correctement, les questions suivantes seront plus difficiles, 
                      et inversement. Cela permet d'identifier votre niveau plus rapidement et avec précision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Question Types */}
        <section className="py-12 bg-background">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Types de questions
              </h2>
              <p className="text-muted-foreground">Familiarisez-vous avec les formats de questions CLOE</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'QCM', desc: 'Questions à choix multiples sur le vocabulaire, la grammaire ou la compréhension' },
                { title: 'Texte à trous (liste)', desc: 'Complétez un texte avec des mots proposés dans un menu déroulant' },
                { title: 'Texte à trous (libre)', desc: 'Saisissez le mot manquant, parfois avec la racine donnée (verbe à conjuguer, etc.)' },
                { title: 'Banque de mots', desc: 'Placez les mots dans les emplacements corrects du texte' },
                { title: 'Phrases dans le désordre', desc: 'Remettez les mots ou phrases dans le bon ordre' },
                { title: 'Compréhension orale', desc: 'Écoutez un extrait audio et répondez aux questions' }
              ].map((type, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2 font-heading">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Oral Test */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Épreuve orale : 5 critères d'évaluation
              </h2>
              <p className="text-muted-foreground">Entretien de 15-20 minutes avec un évaluateur CLOE</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Déroulement de l'oral</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">1</Badge>
                    <div>
                      <h4 className="font-semibold">Questions d'introduction</h4>
                      <p className="text-sm text-muted-foreground">Présentez-vous, votre métier, votre environnement professionnel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">2</Badge>
                    <div>
                      <h4 className="font-semibold">Mise en situation</h4>
                      <p className="text-sm text-muted-foreground">Jeu de rôle dans une situation professionnelle (appel téléphonique, réunion...)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">3</Badge>
                    <div>
                      <h4 className="font-semibold">Discussion thématique</h4>
                      <p className="text-sm text-muted-foreground">Échangez sur un sujet professionnel, défendez votre point de vue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Compétences évaluées</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {oralSkills.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{skill.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CEFR Levels */}
        <section className="py-12 bg-background">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Niveaux CECRL
              </h2>
              <p className="text-muted-foreground">Vos résultats sont alignés sur le Cadre Européen Commun de Référence pour les Langues</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {cefrLevels.map((level) => (
                <div 
                  key={level.level}
                  className={`px-6 py-3 rounded-lg border-2 ${level.color}`}
                >
                  <span className="font-bold font-heading">{level.level}</span>
                  <span className="text-sm ml-2">{level.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Conseils pratiques pour réussir
              </h2>
              <p className="text-muted-foreground">Préparez-vous efficacement avec ces recommandations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <h3 className="font-semibold font-heading">Avant l'examen</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vérifiez votre connexion internet et webcam</li>
                    <li>• Choisissez un environnement calme et bien éclairé</li>
                    <li>• Préparez une pièce d'identité valide</li>
                    <li>• Fermez toutes les applications inutiles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3 text-blue-600">
                    <Clock className="h-5 w-5" />
                    <h3 className="font-semibold font-heading">Pendant l'écrit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lisez chaque question attentivement</li>
                    <li>• Ne passez pas trop de temps sur une question</li>
                    <li>• Le test s'adapte : restez concentré</li>
                    <li>• Faites confiance à votre première intuition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3 text-purple-600">
                    <MessageSquare className="h-5 w-5" />
                    <h3 className="font-semibold font-heading">Pour l'oral</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Parlez clairement et naturellement</li>
                    <li>• N'hésitez pas à demander de répéter</li>
                    <li>• Développez vos réponses avec des exemples</li>
                    <li>• Restez détendu et positif</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 font-heading">Comment utiliser ces exercices ?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Commencez par un exercice de chaque catégorie pour évaluer vos points forts et axes de progression. 
                      Utilisez le filtre par niveau pour adapter la difficulté à votre profil. 
                      Visez la régularité : 15-20 minutes par jour sont plus efficaces qu'une longue session hebdomadaire.
                    </p>
                    <Link to="/exercices/cloe-preparation">
                      <Button size="sm" className="gap-1">
                        Accéder aux exercices
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Prêt à vous préparer ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Découvrez nos exercices d'entraînement gratuits inspirés du format CLOE, 
              ou optez pour une formation accompagnée pour maximiser vos chances de réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/exercices/cloe-preparation">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Exercices gratuits
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CLOEOverview;
