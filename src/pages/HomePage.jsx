import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeroBanner from '../components/home/HeroBanner';
import Categories from '../components/home/Categories';
import Header from '../components/layouts/Header';
import Sidebar from '../components/layouts/Sidebar';

export default function HomePage() {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
      <Sidebar />

      <main className="pt-14 pl-60 pr-4 h-full overflow-y-auto">
        {/* Banner */}
        <HeroBanner />

        {/* Shop by Category */}
        <section className="my-6">
          <h2 className="text-lg font-bold mb-4 text-orange-600">
            Shop by Category
          </h2>
          <Categories />
        </section>

        {/* Featured Products */}
        <section className="my-6">
          <h2 className="text-lg font-bold mb-4 text-orange-600">
            Featured Products
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {/* map your products here */}
            <div className="bg-white p-4 shadow rounded">Product</div>
          </div>
        </section>
      </main>
    </div>
  );
}
