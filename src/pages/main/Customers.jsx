import PageHeader from "../../components/PageHeader";
import { customers } from "../../data/customers";

export default function Customers() {
  return (
    <div>
      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers"]}
      >
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </PageHeader>

      <div className="p-4">
        {customers.map((c) => (
          <div key={c.id} className="p-3 border mb-2 rounded">
            <h3>{c.name}</h3>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            <span>{c.loyalty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}