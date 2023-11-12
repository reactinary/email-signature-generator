

import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = await db.email.create({
      data: {
        companyUrl: body.companyUrl,
        name: body.name,
        customField: body.customField,
        email: body.email,
        jobTitle: body.jobTitle,
        phone: body.phone,
        imageId: body.imageId,
      }
    });
    return NextResponse.json(email, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Could not create email"}, {status: 500})
  }
}
