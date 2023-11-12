'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { EmailProps } from "@/types/email";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import getEmails from "@/actions/getEmails";
import { deleteEmail } from "@/actions/deleteEmail";




export default function EmailList() {
  const router = useRouter();

  // Get emails
  const { data: emails, isLoading: isLoadingEmails } = useQuery({
    queryKey: ['emails'],
    queryFn: getEmails
  });

  // Delete email
  const { mutate: handleDelete, error, isError } = useMutation({
    mutationFn: deleteEmail,
    onSuccess: () => {
      router.refresh();
      router.push('/list/success')
    },
  })


  return (
    <Card className={cn("rounded-xl p-4")}>
      <div>
        <h2 className="font-bold text-xl text-center mb-6">Email List</h2>
        <div className="grid grid-cols-3 gap-4">
          {isLoadingEmails ? (
            <p>Loading...</p>
          ) : (
            emails?.map((email: EmailProps) => (
              <div key={email.id} className="relative flex gap-4  bg-slate-400 p-2 rounded-lg">
                {email.imageId && (
                  <CldImage
                    width="130"
                    height="90"
                    src={email.imageId}
                    sizes="100vw"
                    alt="Description of the image"
                  />
                )}
                <div>
                  <p>{email.companyUrl}</p>
                  <p>{email.name}</p>
                  <p>{email.customField}</p>
                  <p>{email.email}</p>
                  <p>{email.jobTitle}</p>
                  <p>{email.phone}</p>
                </div>
                <Button
                  onClick={() => handleDelete(email.id)}
                  variant="destructive"
                  className="absolute top-0 right-0"
                >
                  <Trash/>
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </Card>
  )
}
