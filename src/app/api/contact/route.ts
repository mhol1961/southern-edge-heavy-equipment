import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    console.log("[Contact Form]", {
      name: validated.name,
      email: validated.email,
      inquiryType: validated.inquiryType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. We typically respond within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: (error as unknown as { errors: unknown[] }).errors },
        { status: 400 }
      );
    }

    console.error("[Contact Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
