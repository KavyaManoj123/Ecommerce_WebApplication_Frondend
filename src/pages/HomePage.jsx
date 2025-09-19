// src/pages/HomePage.jsx
import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

import HeroBanner from "../components/home/HeroBanner";
import Categories from "../components/home/Categories";
import Header from "../components/layouts/Header";

export default function HomePage() {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <HeroBanner />
        <Categories />
      </main>
    </div>
  );
}
