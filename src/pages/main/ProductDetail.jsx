import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      title: "Laptop Pro 14",
      code: "PRD001",
      category: "Laptop",
      brand: "TechBrand",
      price: 15000000,
      stock: 10,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      title: "Laptop Air 13",
      code: "PRD002",
      category: "Laptop",
      brand: "TechBrand",
      price: 12000000,
      stock: 15,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
    {
      title: "Mouse Wireless",
      code: "PRD003",
      category: "Accessories",
      brand: "ClickPro",
      price: 200000,
      stock: 50,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
  ];

  const product = products.find((item) => item.code === id);

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-red-500">Produk tidak ditemukan</p>
        <Link to="/products" className="text-green-600">
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/products" className="mb-4 inline-block text-green-600">
        ← Kembali
      </Link>

      <div className="rounded-xl bg-white p-6 shadow">
        <img
          src={product.image}
          alt={product.title}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />

        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          {product.title}
        </h1>

        <p><b>Code:</b> {product.code}</p>
        <p><b>Category:</b> {product.category}</p>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Price:</b> Rp {product.price.toLocaleString()}</p>
        <p><b>Stock:</b> {product.stock}</p>
      </div>
    </div>
  );
}