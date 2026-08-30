export default function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ja7ca.github.io/#person",
        "name": "Jarot Setiawan",
        "alternateName": "jarotstwn",
        "url": "https://ja7ca.github.io",
        "image": "https://ja7ca.github.io/profile.png",
        "jobTitle": "Full Stack & Frontend Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Full Stack Engineering"
        },
        "sameAs": [
          "https://github.com/Ja7Ca",
          "https://www.linkedin.com/in/jarot-setiawan-947275214/",
          "https://instagram.com/jarotstwn"
        ],
        "knowsAbout": [
          "React.js",
          "Next.js",
          "Vue.js",
          "Express.js",
          "NestJS",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Web Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ja7ca.github.io/#website",
        "url": "https://ja7ca.github.io",
        "name": "Jarot Setiawan Portfolio",
        "description": "Portfolio of Jarot Setiawan - Full Stack & Frontend Developer",
        "publisher": {
          "@id": "https://ja7ca.github.io/#person"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
