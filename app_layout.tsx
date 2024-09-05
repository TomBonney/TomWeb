import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ShoppingBag, Info, Home } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground">
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">My Website</Link>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="flex items-center">
                    <Home className="mr-2" size={18} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="flex items-center">
                    <ShoppingBag className="mr-2" size={18} />
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center">
                    <Info className="mr-2" size={18} />
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-muted">
            <div className="container mx-auto px-4 py-6 text-center">
              © 2023 My Website. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}