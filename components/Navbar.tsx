import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[70px] mb-4">
      <Link href="/">Home</Link>
      <div className="flex gap-4">
        <Link href="/create">
          <Button>Create</Button>
        </Link>
        <Link href="/list">
          <Button variant="secondary">List</Button>
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
