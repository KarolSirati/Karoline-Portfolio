import { FormEvent, useState } from "react";
import { sendContact } from "../clients/contactClient";
import type { ContactMessage } from "../models/portfolio";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export function useContactController() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as ContactMessage;
    setStatus("sending");
    try {
      await sendContact(data);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}
