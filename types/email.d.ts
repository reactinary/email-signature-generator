export type EmailProps = {
  companyUrl: string;
  name: string;
  imageId?: string | undefined;
  createdAt: string;
  customField?: string;
  email: string;
  id: string;
  jobTitle: string;
  phone?: string;
};


export type EmailOutputProps = {
  data: FormProps;
  image: any;
}


export type PartialFormValues = Partial<{
  companyUrl: string;
  name: string;
  email: string;
  jobTitle: string;
  customField?: string;
  phone?: string;
  imageId: string;
}>;
