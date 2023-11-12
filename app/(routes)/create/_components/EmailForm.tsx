"use client";
import React from "react";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";


// https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg


const formSchema = z.object({
  companyName: z.string(),
  Username: z.string(),
  companyLogoUrl: z.string().optional(),
  customField: z.string().optional(),
  email: z.string().email(),
  jobTitle: z.string(),
  phone: z.string().optional(),
})




export default function EmailForm() {
  return (
    <div className="w-[400px] p-4 rounded-xl bg-neutral-200 dark:bg-neutral-700">
      <h2 className="font-bold text-xl text-center mb-4">Email Form</h2>

      <AutoForm
        formSchema={formSchema}
        onSubmit={v => {
          alert(JSON.stringify(v, null, 2))
        }}
        >
        <AutoFormSubmit />
      </AutoForm>
    </div>
  );
}
