export default async function handler(req: any, res: any) {
  const { body, method } = req;

  const { name, email, topic, message, termsOfService, captcha } = body;

  if (method === "POST") {
    if (!email || !captcha || !name) {
      return res.status(422);
    }
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();

    if (captchaValidation.success) {
      return res.status(200).send("OK");
    }
    return res.status(422);
  } catch (error) {}
  return res.status(404);
}
