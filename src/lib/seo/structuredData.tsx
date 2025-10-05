import React from 'react';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name,
  url,
  logo,
  sameAs = [],
  contactPoint,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    ...(logo && { logo }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(contactPoint && { contactPoint: { '@type': 'ContactPoint', ...contactPoint } }),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface PersonSchemaProps {
  name: string;
  url: string;
  image?: string;
  jobTitle?: string;
  description?: string;
  sameAs?: string[];
}

export const PersonSchema: React.FC<PersonSchemaProps> = ({
  name,
  url,
  image,
  jobTitle,
  description,
  sameAs = [],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    ...(image && { image }),
    ...(jobTitle && { jobTitle }),
    ...(description && { description }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo?: string;
  };
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && { logo: { '@type': 'ImageObject', url: publisher.logo } }),
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url?: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export const CourseSchema: React.FC<CourseSchemaProps> = ({
  name,
  description,
  provider,
  offers,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      ...(provider.url && { url: provider.url }),
    },
    ...(offers && { offers: { '@type': 'Offer', ...offers } }),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};
