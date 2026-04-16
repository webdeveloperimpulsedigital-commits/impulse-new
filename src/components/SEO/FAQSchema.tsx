import { Helmet } from "react-helmet-async";
import type { FAQItem } from "../../data/faqs";

type FAQSchemaProps = {
  faqs?: FAQItem[];
};

export const FAQSchema = ({ faqs = [] }: FAQSchemaProps): JSX.Element | null => {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};