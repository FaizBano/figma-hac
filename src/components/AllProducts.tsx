import { ShoppingCart } from "lucide-react";
import {Badge} from"@/components/ui/badge"
import Image from "next/image";
import Link from "next/link";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "86wy6siq", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2025-01-27", // Use the correct API version
  useCdn: true,
});
async function fetchAllProducts() {
  const query = `*[_type == "products" && "featured" && "AllProducts" in tags]{
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    category->{
      name
    },
    description,
    inventory,
    tags
  }`;

  const featuredProducts = await client.fetch(query);
  return featuredProducts;
}

fetchAllProducts()
  .then((products) => console.log("Featured Products:", products))
  .catch((error) => console.error("Error fetching featured products:", error));




type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/image.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/image1.png",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/image2.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/image3.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/p1.png",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/p2.png",
      isSale: true,
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      image: "/pp.png",
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      image: "/image.png",
    },
    {
      id: 9,
      title: "Library Stool Chair",
      price: 20,
      image: "/p1.png",
    },
    {
      id: 10,
      title: "Library Stool Chair",
      price: 20,
      image: "/image1.png",
    },
    {
      id: 11,
      title: "Library Stool Chair",
      price: 20,
      image: "/image2.png",
    },
    {
      id: 12,
      title: "Library Stool Chair",
      price: 20,
      image: "/p3.png",
    },
  ];
   

  return (
    <div className="text-gray-800"> Product Page
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-10 mx-5 text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight ">
        All Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
}