// src/components/home/Categories.jsx
export default function Categories() {
  const categories = ["Electronics", "Fashion", "Groceries", "Home"];

  return (
    <section className="mt-6 w-11/12 max-w-4xl">
      <h3 className="text-lg font-semibold mb-2">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white shadow rounded-lg p-4 text-center cursor-pointer hover:shadow-lg"
          >
            <p className="font-medium text-gray-700">{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
