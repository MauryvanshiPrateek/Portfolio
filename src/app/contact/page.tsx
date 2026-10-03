import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Mauryvanshi Prateek",
  description:
    "Start a conversation with Mauryvanshi Prateek — AI/ML engineering, collaboration, and opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
