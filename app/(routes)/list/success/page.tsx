import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";


export default function SuccessDeletePage() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-6 h-[300px] mt-10">
        <h3 className="text-3xl font-semibold leading-none tracking-tight">
          Email Deleted
        </h3>
        <p className="text-lg text-muted-foreground">
          Your email has been deleted.
        </p>

        <Link href="/list">
          <Button variant="secondary" className="w-[200px]">Go back to my List</Button>
        </Link>
      </div>
    </Card>
  )
}
