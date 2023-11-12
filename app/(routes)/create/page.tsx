"use client";
import React, { useEffect, useState } from "react";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import EmailOutput from "./_components/EmailOutput";
import { formSchema } from "@/schema/formSchema";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "@/types/upload";
import { PartialFormValues } from "@/types/email";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// I've created FormWithoutImageProps to not show the Autoform field to users
import { FullFormProps } from "@/schema/formSchema";






export default function CreatePage() {
  const router = useRouter();
  const [imageId, setImageId] = useState("");

  const [formValues, setFormValues] = useState<FullFormProps>({
    companyUrl: "", name: "", email: "", jobTitle: "", imageId: "",
  });


  // Update formValues when imageId changes
  useEffect(() => {
    if (imageId !== undefined) {
      setFormValues((prevValues) => ({
        ...prevValues,
        imageId: imageId,
      }));
    }
  }, [imageId]);



  const handleSubmit: SubmitHandler<FullFormProps> = (data) => {
    console.log(data)
    createEmail(data)
  }

  const { mutate: createEmail, error } = useMutation({
    mutationFn: (newEmail: FullFormProps) => {
      console.log("New Email Object:", newEmail);
      return axios.post('/api/emails/create', newEmail)
    },
    onError: () => {
      console.error(error);
    },
    onSuccess: () => {
      router.push('/list');
      router.refresh();
    },
  })


  return (
    <div className="flex gap-4">
      {/* ----- 1. EMAIL FORM ------ */}
      <Card className={cn("w-[450px] p-4")}>
        <h2 className="font-bold text-xl text-center mb-4">Email Form</h2>


        <AutoForm
          formSchema={formSchema}
          onSubmit={handleSubmit}
          values={formValues}
          // onValuesChange={setFormValues}
          onValuesChange={(values: PartialFormValues) => {
            setFormValues((prevValues) => ({
              ...prevValues,
              ...values,
            }));
          }}
          fieldConfig={{
            imageId: {
              inputProps: {
                readOnly: true,
                placeholder: "Please upload your image",
              },
            },
          }}
        >
          <div className="flex gap-2">
            {/* ------ UPLOAD ------ */}
            <Button variant="blue" className="mr-4">
              <CldUploadButton
                // NB: The correct type is UploadResult, but it's not working with Cloudinary's package...
                onUpload={(result: any) => {
                  setImageId(result.info.public_id);
                }}
                uploadPreset="fuv4kfwy"
              />
            </Button>

            {/* ------ CREATE ------ */}
            <AutoFormSubmit>Create</AutoFormSubmit>

          </div>
        </AutoForm>
      </Card>

      {/* ----- 2. EMAIL OUTPUT ------ */}
      <EmailOutput data={formValues} image={imageId} />
    </div>
  );
}
