import { Button } from '@/components/ui/button';
import Link from "next/link";


export default function Home() {
  return (
    <div className='flex flex-col gap-6 items-center text-center mt-[120px] max-w-[500px] mx-auto'>
      <h1 className='font-bold text-5xl'>Create email signature, instantly</h1>
      <p>Experience the ease of generating polished email signatures instantly, saving you time and effort.</p>
      <div className='flex gap-10'>
        <Link href="/create">
          <Button>Create</Button>
        </Link>
        <Button variant="secondary">Repo</Button>
      </div>
    </div>
  );
}
