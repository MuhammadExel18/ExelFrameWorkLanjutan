import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Halaman tidak ditemukan
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-green-500 px-5 py-2 text-white hover:bg-green-600 transition"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
}

export default NotFound;