import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
      <p className="text-xl text-center max-w-2xl">
        Discover our amazing products and learn more about our company.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/shop">Visit Shop</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/about">About Us</Link>
        </Button>
      </div>
    </div>
  )
}