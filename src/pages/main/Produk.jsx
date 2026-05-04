import React from "react";
import { Link } from "react-router-dom";

export default function Produk() {
  const products = [
    { title: "Laptop Pro 14", code: "PRD001", category: "Laptop", brand: "TechBrand", price: 15000000, stock: 10 },
    { title: "Laptop Air 13", code: "PRD002", category: "Laptop", brand: "TechBrand", price: 12000000, stock: 15 },
    { title: "Mouse Wireless", code: "PRD003", category: "Accessories", brand: "ClickPro", price: 200000, stock: 50 },
    { title: "Keyboard Mechanical", code: "PRD004", category: "Accessories", brand: "KeyMaster", price: 750000, stock: 30 },
    { title: "Monitor 24 Inch", code: "PRD005", category: "Monitor", brand: "ViewMax", price: 2500000, stock: 20 },
    { title: "Monitor 27 Inch", code: "PRD006", category: "Monitor", brand: "ViewMax", price: 3500000, stock: 12 },
    { title: "Printer Inkjet", code: "PRD007", category: "Printer", brand: "PrintX", price: 1800000, stock: 8 },
    { title: "Printer Laser", code: "PRD008", category: "Printer", brand: "PrintX", price: 3200000, stock: 6 },
    { title: "Tablet 10 Inch", code: "PRD009", category: "Tablet", brand: "TabTech", price: 5000000, stock: 14 },
    { title: "Tablet 8 Inch", code: "PRD010", category: "Tablet", brand: "TabTech", price: 3500000, stock: 18 },
    { title: "Smartphone X", code: "PRD011", category: "Phone", brand: "PhoneMax", price: 10000000, stock: 25 },
    { title: "Smartphone Y", code: "PRD012", category: "Phone", brand: "PhoneMax", price: 8000000, stock: 30 },
    { title: "Headphone Wireless", code: "PRD013", category: "Audio", brand: "SoundPro", price: 1200000, stock: 40 },
    { title: "Earbuds", code: "PRD014", category: "Audio", brand: "SoundPro", price: 600000, stock: 60 },
    { title: "Speaker Bluetooth", code: "PRD015", category: "Audio", brand: "BoomBox", price: 900000, stock: 22 },
    { title: "Webcam HD", code: "PRD016", category: "Accessories", brand: "CamTech", price: 500000, stock: 35 },
    { title: "External HDD 1TB", code: "PRD017", category: "Storage", brand: "DataSafe", price: 850000, stock: 28 },
    { title: "External SSD 512GB", code: "PRD018", category: "Storage", brand: "DataSafe", price: 1200000, stock: 20 },
    { title: "Flashdisk 64GB", code: "PRD019", category: "Storage", brand: "FlashGo", price: 150000, stock: 70 },
    { title: "Router WiFi", code: "PRD020", category: "Networking", brand: "NetFast", price: 400000, stock: 26 },
    { title: "Switch 8 Port", code: "PRD021", category: "Networking", brand: "NetFast", price: 600000, stock: 18 },
    { title: "Power Bank 10000mAh", code: "PRD022", category: "Accessories", brand: "ChargeUp", price: 250000, stock: 45 },
    { title: "Power Bank 20000mAh", code: "PRD023", category: "Accessories", brand: "ChargeUp", price: 400000, stock: 32 },
    { title: "Smartwatch A", code: "PRD024", category: "Wearable", brand: "WatchPro", price: 2000000, stock: 16 },
    { title: "Smartwatch B", code: "PRD025", category: "Wearable", brand: "WatchPro", price: 1500000, stock: 19 },
    { title: "Camera DSLR", code: "PRD026", category: "Camera", brand: "PhotoPro", price: 8500000, stock: 7 },
    { title: "Camera Mirrorless", code: "PRD027", category: "Camera", brand: "PhotoPro", price: 9500000, stock: 5 },
    { title: "Tripod", code: "PRD028", category: "Camera", brand: "PhotoPro", price: 300000, stock: 25 },
    { title: "Gaming Chair", code: "PRD029", category: "Furniture", brand: "ComfortSeat", price: 2500000, stock: 10 },
    { title: "Office Desk", code: "PRD030", category: "Furniture", brand: "ComfortSeat", price: 3000000, stock: 8 },
  ];

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Halaman Produk
      </h1>

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-green-100 text-green-700">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.code} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.code}`}
                    className="text-emerald-500 hover:text-emerald-600 font-semibold"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="px-6 py-4">{item.code}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.brand}</td>
                <td className="px-6 py-4">Rp {item.price.toLocaleString()}</td>
                <td className="px-6 py-4">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}