import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = leadSchema.parse(body);

    // Log for now — database integration comes later
    console.log("[Lead Received]", {
      name: validated.name,
      email: validated.email,
      inquiryType: validated.inquiryType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully. We'll be in touch within 24 hours.",
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

    console.error("[Lead Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
