import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY as string;

export async function POST(request: NextRequest) {
  const { recaptchaToken, ...values } = await request.json();

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    }
  );

  const data = await response.json();
  // await setTimeout("5000");
  if (data.success) {
    // Handle form data submission
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({
      success: false,
      error: "reCAPTCHA verification failed",
    });
  }
}
