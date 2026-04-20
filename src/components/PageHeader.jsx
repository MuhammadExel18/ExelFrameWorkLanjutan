export default function PageHeader({
  title,
  breadcrumb,
  children,
}) {
  return (
    <div className="flex items-center justify-between p-4">
      
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="text-sm text-gray-500 mt-1">
          {Array.isArray(breadcrumb)
            ? breadcrumb.join(" / ")
            : breadcrumb}
        </div>
      </div>

      {/* Right (Custom Content) */}
      <div>{children}</div>
    </div>
  );
}