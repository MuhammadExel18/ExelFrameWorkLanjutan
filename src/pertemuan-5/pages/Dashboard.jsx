import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";


// 🔥 Format Rupiah
function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}


// 🔥 Card Dashboard (Reusable + Animasi)
function DashboardCard({ icon, color, value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    let duration = 800;
    let increment = end / (duration / 20);

    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-center space-x-5 rounded-xl bg-white p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`rounded-full ${color} p-4`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{count}</span>
        <span className="text-gray-400">{label}</span>
      </div>
    </div>
  );
}


// 🔥 Card Keuangan
function FinanceCard({ title, amount, color }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md hover:shadow-xl transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{formatRupiah(amount)}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${Math.min(amount / 50000, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}


export default function Dashboard() {
  const [search, setSearch] = useState("");

  // 🔥 DATA UTAMA
  const data = [
    {
      label: "Total Orders",
      value: 75,
      icon: <FaShoppingCart className="text-3xl text-white" />,
      color: "bg-green-500",
    },
    {
      label: "Total Delivered",
      value: 175,
      icon: <FaTruck className="text-3xl text-white" />,
      color: "bg-blue-500",
    },
    {
      label: "Total Canceled",
      value: 40,
      icon: <FaBan className="text-3xl text-white" />,
      color: "bg-red-500",
    },
    {
      label: "Total Revenue",
      value: 128,
      icon: <FaDollarSign className="text-3xl text-white" />,
      color: "bg-yellow-500",
    },
    {
      label: "Total Customers",
      value: 320,
      icon: <FaUsers className="text-3xl text-white" />,
      color: "bg-purple-500",
    },
  ];

  // 🔍 FILTER SEARCH
  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  // 💰 DATA KEUANGAN
  const financeData = {
    income: 5000000,
    expense: 3200000,
  };

  const profit = financeData.income - financeData.expense;

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen">
      <PageHeader />

      {/* 🔍 SEARCH */}
      <div className="p-5">
        <input
          type="text"
          placeholder="Cari data dashboard..."
          className="w-full rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 💰 SECTION KEUANGAN */}
      <div className="grid gap-5 px-5 md:grid-cols-3 mb-5">
        <FinanceCard
          title="Total Income"
          amount={financeData.income}
          color="bg-green-500"
        />
        <FinanceCard
          title="Total Expense"
          amount={financeData.expense}
          color="bg-red-500"
        />
        <FinanceCard
          title="Net Profit"
          amount={profit}
          color="bg-blue-500"
        />
      </div>

      {/* 📊 DASHBOARD UTAMA */}
      <div className="grid gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <DashboardCard key={index} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            ❌ Data tidak ditemukan
          </p>
        )}
      </div>
    </div>
  );
}