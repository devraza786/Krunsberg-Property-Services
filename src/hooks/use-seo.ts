import { useEffect } from "react";
import { setMetaTags, injectSchema } from "@/lib/seo";

interface UseSeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  schema?: unknown;
}

export const useSeo = ({
  title,
  description,
  keywords,
  image,
  schema,
}: UseSeoProps) => {
  useEffect(() => {
    setMetaTags(title, description, keywords, image);
    if (schema) {
      injectSchema(schema);
    }
  }, [title, description, keywords, image, schema]);
};
