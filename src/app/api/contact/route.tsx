import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY as string;
const MAIL_SERVER = process.env.MAIL_SERVER as string;
const MAIL_USERNAME = process.env.MAIL_USERNAME as string;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD as string;

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
    // console.log(values);
    const transporter = nodemailer.createTransport({
      host: MAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
        // pass: "",
      },
    });
    try {
      const mail = await transporter.sendMail({
        from: values.email,
        to: MAIL_USERNAME,
        subject: values.topic,
        html: `
          <p>Name: ${values.name} </p>
          <p>Email: ${values.email} </p>
          <p>Message: ${values.message} </p>
          `,
      });
      // console.log("MAIL", mail.accepted);

      return NextResponse.json(
        {
          success: true,
          error: "",
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      //NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
      return NextResponse.json(
        {
          success: false,
          error: "email failed sending",
        },
        { status: 500 }
      );
    }
    //return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      {
        success: false,
        error: "reCAPTCHA verification failed",
      },
      { status: 500 }
    );
  }
}
