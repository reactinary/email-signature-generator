import db from "@/lib/db";
import { NextResponse } from "next/server";


type contextProps = { params: { emailId: string } }


export async function DELETE(req: Request, context: contextProps) {
  try {
    const { params } = context;
    console.log('Deleting email with ID:', params.emailId);


    await db.email.delete({
      where: {
        id: params.emailId
      }
    });
    return new Response(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({message: "Could not delete email"}, {status: 500})
  }
}
