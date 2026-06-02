import { jsx } from "react/jsx-runtime";
const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    ...image && { image },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      ...author.url && { url: author.url }
    },
    publisher: {
      "@type": "Organization",
      name: publisher.name,
      ...publisher.logo && { logo: { "@type": "ImageObject", url: publisher.logo } }
    }
  };
  return /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } });
};
const CourseSchema = ({
  name,
  description,
  provider,
  offers
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      ...provider.url && { url: provider.url }
    },
    ...offers && { offers: { "@type": "Offer", ...offers } }
  };
  return /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } });
};
export {
  ArticleSchema as A,
  CourseSchema as C
};
