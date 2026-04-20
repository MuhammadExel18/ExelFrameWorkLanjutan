import PageHeader from "../components/PageHeader";
import { orders } from "../data/orders";

export default function Orders() {
  return (
    <div>
      <PageHeader
        title="Orders"
        breadcrumb={["Dashboard", "Orders"]}
      >
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Order
        </button>
      </PageHeader>

      <div className="p-4">
        {orders.map((o) => (
          <div key={o.id} className="p-3 border mb-2 rounded">
            <h3>{o.id}</h3>
            <p>{o.customer}</p>
            <p>{o.status}</p>
            <p>Rp {o.total}</p>
            <p>{o.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}