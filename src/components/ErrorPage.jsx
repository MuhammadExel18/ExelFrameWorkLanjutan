export default function ErrorPage({
  code = "404",
  description = "Page not found",
  image,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      
      <img
        src={image}
        alt="error"
        className="w-64 mb-6"
      />

      <h1 className="text-6xl font-bold text-red-500">
        {code}
      </h1>

      <p className="mt-2 text-gray-600 text-lg">
        {description}
      </p>
    </div>
  );
}