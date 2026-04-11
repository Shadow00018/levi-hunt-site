export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  try {
    const webhookURL = "https://discord.com/api/webhooks/1489190744483823709/Ec6U3EjtIhZmP84Vjs4d2VU0p4AKa76Xdbxvk4Y2zu5mfUmE3OGdbf_-RNPKx_s-qULZ"; // ⚠️ regenerate your webhook

    const response = await fetch(webhookURL, {
      method: "POST",
      body: req.body,
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      return res.status(200).send("Success");
    } else {
      return res.status(500).send("Discord error");
    }

  } catch (err) {
    return res.status(500).send("Server error");
  }
}