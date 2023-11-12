import { CldImage } from "next-cloudinary";
import { EmailOutputProps } from "@/types/email";

// Placeholder image URL
const placeholderImage = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";

export default function YourEmail({ data, image }: EmailOutputProps) {
  return (
    <div>
      <h3 className="font-bold text-lg">Your Email</h3>
      <div className="flex gap-4 items-start">
        <div className="w-[160px] h-[160px]">
          {image ? (
            <CldImage
              width="500"
              height="300"
              src={image}
              sizes="100vw"
              alt="Description of my image"
            />
          ) : (
            <img
              src={placeholderImage}
              alt="Placeholder"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>

        <div>
          <p>{data.name}</p>
          <p>{data.jobTitle}</p>
          <p>{data.email}</p>
          <p>{data.customField}</p>
          <p>{data.companyUrl}</p>
          <p>{data.phone}</p>
        </div>
      </div>
    </div>
  );
}
