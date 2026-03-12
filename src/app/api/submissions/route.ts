import { NextRequest, NextResponse } from "next/server";
import { submissionSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = submissionSchema.parse(body);

    console.log("[Equipment Submission]", {
      contact: validated.contactName,
      equipment: `${validated.year || ""} ${validated.make} ${validated.model}`.trim(),
      condition: validated.condition,
      location: validated.location,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Equipment submission received! Our team will review your listing within 24-48 hours.",
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

    console.error("[Submission Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
