import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ConfirmModal from "../common/ConfirmModal";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header className="bg-white shadow px-6 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10 h-14 border-b">
        <h1 className="text-xl font-bold text-orange-500">E Spurt</h1>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded px-3 py-1 w-56 focus:ring-2 focus:ring-orange-400 text-sm"
          />
          <button className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2">
              2
            </span>
          </button>
          <span className="font-medium text-gray-700">Hi, {user?.name}</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
          >
            Logout
          </button>
        </div>
      </header>

      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleLogoutConfirm}
        message="Do you really want to logout?"
      />
    </>
  );
}
