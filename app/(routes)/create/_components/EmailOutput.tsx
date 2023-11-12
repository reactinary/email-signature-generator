import Example from "./Example";
import YourEmail from "./YourEmail";
import { EmailOutputProps } from "@/types/email";




export default function EmailOutput({ data, image }: EmailOutputProps) {
  return (
    <div className="flex flex-col gap-8 w-full rounded-lg p-3 bg-slate-200 dark:bg-slate-700">
      <Example />
      <YourEmail data={data} image={image} />
    </div>
  );
}
