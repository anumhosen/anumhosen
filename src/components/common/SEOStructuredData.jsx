import { useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo';
import { projectsData } from '../../data/projectsData';

export default function SEOStructuredData() {
  useEffect(() => {
    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) existingScript.remove();

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personalInfo.name,
      "alternateName": personalInfo.shortName,
      "jobTitle": personalInfo.headline,
      "description": personalInfo.tagline,
      "url": `https://${personalInfo.domain}`,
      "image": `https://${personalInfo.domain}${personalInfo.photoUrl}`,
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": personalInfo.institution
      },
      "sameAs": [
        personalInfo.githubUrl,
        personalInfo.linkedinUrl
      ],
      "knowsAbout": [
        "Full-Stack Web Development",
        "Cross-Platform Desktop Applications",
        "Tauri",
        "Electron",
        "React",
        "Node.js",
        "SQLite",
        "MongoDB",
        "Molecular Dynamics Simulation",
        "GROMACS",
        "Python"
      ]
    };

    const projectsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projectsData.slice(0, 4).map((project, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.shortDesc,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Cross-platform (Windows, Linux, macOS)",
          "url": project.githubUrl
        }
      }))
    };

    const script = document.createElement('script');
    script.id = 'seo-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify([personSchema, projectsSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('seo-structured-data');
      if (el) el.remove();
    };
  }, []);

  return null;
}
