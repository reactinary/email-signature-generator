import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  jobTitle: z.string(),
  email: z.string().email(),
  customField: z.string().optional(),
  companyUrl: z.string(),
  phone: z.string().optional(),
  imageId: z
    .string()
    .refine((value) => {
      return value.trim() !== "";
    }, {
      message: "Please upload an image",
    }),
});

export type FullFormProps = z.infer<typeof formSchema>;
