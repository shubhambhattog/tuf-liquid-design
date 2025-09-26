import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1>tuf liquid glass design</h1>
      <div className='flex flex-col gap-4'>
        <div>
          <Link href="/login">
            <Button>Go to Login Page</Button>
          </Link>
        </div>
        <div>
          <Link href="/heropg">
            <Button>Go to Hero Page</Button>
          </Link>
        </div>
        <div>
          <Link href="/glass-effect">
            <Button>Go to Glass Effect Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
