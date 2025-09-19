// src/components/ProtectedRoute.jsx
import { useAppSelector } from "../app/hooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAppSelector((state) => state.auth);
  if (!user) return <Navigate to="/" replace />;
  return children;
}
