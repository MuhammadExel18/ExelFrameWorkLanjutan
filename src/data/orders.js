export const orders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${i + 1}`,
  customer: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  total: Math.floor(Math.random() * 1000000),
  date: `2024-01-${(i % 30) + 1}`,
}));