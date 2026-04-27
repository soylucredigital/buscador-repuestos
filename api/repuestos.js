export default async function handler(req, res) {
  try {
    const response = await fetch("https://soylucredigital.app.n8n.cloud/webhook/repuestos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    res.status(200).send(text);

  } catch (error) {
    console.error("ERROR API:", error);
    res.status(500).json({ error: "Error conectando con n8n" });
  }
}
