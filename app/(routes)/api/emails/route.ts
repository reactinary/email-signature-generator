import { db } from "@/lib/db"
import { NextResponse } from "next/server";



export async function GET() {
  try {
    const emails = await db.email.findMany();
    return NextResponse.json(emails, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Could not fetch emails"}, {status: 500})
  }
}
