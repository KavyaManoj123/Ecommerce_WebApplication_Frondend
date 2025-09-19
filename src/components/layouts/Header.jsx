// src/components/layout/Header.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ConfirmModal from '../common/ConfirmModal';

export default function Header() {
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate('/'); // redirect to login
  };

  return (
    <>
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center flex-shrink-0">
        <h1 className="text-2xl font-bold text-orange-500">E Spurt</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded px-4 py-2 w-64 focus:ring-2 focus:ring-orange-400"
          />
          <button className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2">
              2
            </span>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Hi, {user?.name}</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleLogoutConfirm}
        message="Do you really want to logout?"
      />
    </>
  );
}
