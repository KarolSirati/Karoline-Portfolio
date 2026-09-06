import type { ContactMessage } from "../models/portfolio";

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export async function sendContact(message: ContactMessage): Promise<void> {
  const response = await fetch(`${apiUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  if (!response.ok) throw new Error("Não foi possível enviar a mensagem");
}
