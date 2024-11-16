import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div >
    <h2>Programming-Communities</h2>
    <Button variant="ghost">Subscribe</Button>

    <UserButton />
  </div>
  
  );
}
