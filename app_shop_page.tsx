import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const products = [
  { id: 1, name: "Product 1", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Product 2", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Product 3", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Product 4", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function Shop() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-md" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}