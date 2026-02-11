// SEO Meta Tags and Structured Data

export const businessData = {
  name: "Krunsberg Property Services",
  phone: "+1-336-817-3875",
  email: "contact@krunsberg.com",
  address: {
    street: "Pulaski",
    city: "Pulaski",
    state: "VA",
    postalCode: "24301",
    country: "US",
  },
  serviceArea: ["Pulaski", "Dublin", "Radford", "Floyd County", "Giles County"],
  serviceTypes: [
    "Painting",
    "Interior Remodels",
    "Driveway Repair",
    "Landscaping",
    "Drainage Solutions",
    "Exterior Upgrades",
  ],
  foundingDate: "2023",
  ratingValue: 5.0,
  ratingCount: 4,
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessData.name,
    description:
      "Quality property repairs, improvements, and maintenance services in Pulaski, VA and surrounding areas. Professional painting, landscaping, remodels, drainage solutions, and more.",
    url: "https://krunsberg-property-services.com",
    telephone: businessData.phone,
    email: businessData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.state,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.3289,
      longitude: -80.763,
    },
    areaServed: businessData.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$-$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessData.ratingValue,
      ratingCount: businessData.ratingCount,
    },
    sameAs: [
      "https://www.facebook.com/people/Krunsberg-Property-Services/61587253469663/",
    ],
    image: "https://krunsberg-property-services.com/og-image.jpg",
    opens: "Mo-Su 07:00",
    closes: "Mo-Su 18:00",
  };
};

export const generateServiceSchema = (serviceType: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: businessData.name,
      telephone: businessData.phone,
    },
    areaServed: businessData.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: serviceType,
  };
};

export const setMetaTags = (
  title: string,
  description: string,
  keywords?: string,
  image?: string
) => {
  // Title
  if (document) {
    document.title = title;

    // Remove existing meta tags
    const existingMeta = document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:image"]');
    existingMeta.forEach((tag) => tag.remove());

    // Description
    const descMeta = document.createElement("meta");
    descMeta.name = "description";
    descMeta.content = description;
    document.head.appendChild(descMeta);

    // Keywords (if provided)
    if (keywords) {
      const keywordMeta = document.createElement("meta");
      keywordMeta.name = "keywords";
      keywordMeta.content = keywords;
      document.head.appendChild(keywordMeta);
    }

    // Open Graph
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = title;
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.content = description;
    document.head.appendChild(ogDesc);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content = image || "https://krunsberg-property-services.com/og-image.jpg";
    document.head.appendChild(ogImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }
};

export const injectSchema = (schema: unknown) => {
  if (document) {
    // Remove existing schema script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject new schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};

export const pageMetadata = {
  home: {
    title: "Krunsberg Property Services - Pulaski, VA",
    description:
      "Quality property repairs, improvements, and maintenance in Pulaski, VA. Professional painting, landscaping, remodeling, and exterior upgrades.",
    keywords:
      "property services, home repair, painting, landscaping, Pulaski VA, property maintenance",
  },
  services: {
    title: "Our Services - Krunsberg Property Services",
    description:
      "Comprehensive property services including painting, interior remodels, driveway repair, landscaping, drainage solutions, and exterior upgrades.",
    keywords:
      "painting services, landscaping, home remodeling, driveway repair, drainage solutions, property maintenance",
  },
  pricing: {
    title: "Pricing & Packages - Krunsberg Property Services",
    description:
      "Transparent pricing for all property services. Choose from Basic, Standard, Premium, or Custom packages. Free consultations available.",
    keywords:
      "pricing, property service packages, affordable home repair, quotes, Pulaski VA",
  },
  gallery: {
    title: "Project Gallery - Krunsberg Property Services",
    description:
      "View our completed projects and quality work. See examples of our painting, landscaping, remodeling, and property improvement services.",
    keywords:
      "project photos, home improvement gallery, completed projects, property services examples",
  },
  about: {
    title: "About Us - Krunsberg Property Services",
    description:
      "Learn about Krunsberg Property Services, our experience, values, and commitment to quality property services in Virginia.",
    keywords:
      "about krunsberg, property services company, local business, trusted contractors",
  },
  contact: {
    title: "Contact Us - Krunsberg Property Services",
    description:
      "Get in touch with Krunsberg Property Services for a free consultation. Call 336-817-3875 or request a quote online.",
    keywords: "contact, free quote, consultation, phone, email, property services",
  },
};
