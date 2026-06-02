import { jsx } from "react/jsx-runtime";
import { C as CityLandingPage } from "./CityLandingPage-CFB7yEqS.js";
import "react-router-dom";
import "../main.mjs";
import "vite-react-ssg";
import "react";
import "@tanstack/react-query";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "framer-motion";
import "i18next";
import "react-i18next";
import "i18next-browser-languagedetector";
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const OTHER_CITIES = [
  { name: "Nice", path: "/cours-anglais-nice" },
  { name: "Cannes", path: "/cours-anglais-cannes" },
  { name: "Antibes", path: "/cours-anglais-antibes" },
  { name: "Sophia Antipolis", path: "/cours-anglais-sophia-antipolis" }
];
const CoursAnglaisFrejus = () => /* @__PURE__ */ jsx(
  CityLandingPage,
  {
    seo: {
      title: "Cours d'anglais Fréjus — Formateur natif britannique",
      description: "Cours d'anglais sur-mesure à Fréjus et dans l'Est-Var. Formateur natif britannique certifié FPA. Présentiel ou distance, entreprises et particuliers.",
      canonical: "https://www.antonyaddy.com/cours-anglais-frejus"
    },
    city: "Fréjus",
    h1: "Cours d'anglais Fréjus — Formateur natif britannique",
    intro: "Basé à Fréjus, je propose des cours d'anglais sur-mesure pour les habitants et professionnels de Fréjus et de l'Est-Var (Saint-Raphaël, Roquebrune-sur-Argens, Puget-sur-Argens, Les Adrets-de-l'Estérel). Présentiel ou distance, formation adaptée à votre profil et vos objectifs.",
    whoIAm: "Antony Addy, formateur d'anglais natif britannique, certifié Formateur Professionnel d'Adultes (FPA), plus de 20 ans d'expérience. Basé à Fréjus, j'interviens directement sur place chez vous ou dans vos locaux dans tout l'Est-Var. J'enseigne également à l'École Du Journalisme de Nice.",
    howItWorks: "Le présentiel à Fréjus et dans les communes voisines est ma zone de prédilection — pas de déplacement à organiser pour vous. La distance reste évidemment possible si vous préférez. Tout démarre par une première séance pour évaluer votre niveau, comprendre vos objectifs, et construire un programme adapté. Planning flexible selon vos disponibilités.",
    areaServed: ["Fréjus", "Saint-Raphaël", "Roquebrune-sur-Argens", "Puget-sur-Argens", "Les Adrets-de-l'Estérel"],
    faqs: [
      { q: "Vous déplacez-vous à Saint-Raphaël et alentour ?", a: "Oui, je me déplace dans tout l'Est-Var : Saint-Raphaël, Roquebrune-sur-Argens, Puget-sur-Argens, Les Adrets, et les communes proches." },
      { q: "Cours individuels ou en groupe à Fréjus ?", a: "Les deux. J'interviens en cours individuels au domicile ou en entreprise, et en cours collectifs pour les équipes professionnelles." },
      { q: "Et si je préfère la distance ?", a: "La distance fonctionne parfaitement, en visio. Beaucoup de clients combinent les deux : présentiel pour démarrer, distance pour la régularité." }
    ],
    otherCities: OTHER_CITIES
  }
);
export {
  CoursAnglaisFrejus as default
};
