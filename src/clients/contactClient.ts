import type { ContactMessage } from "../models/portfolio";

const formspreeUrl = "https://formspree.io/f/myeyndal";

export async function sendContact(
  message: ContactMessage,
): Promise<void> {
  const response = await fetch(formspreeUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error("Não foi possível enviar a mensagem");
  }
}
