// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// requiredRole: "admin" | "provider" | null (null = faqat login kifoya)
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, profile, loading } = useAuth();

  if (loading) return <div className="p-12 text-center">Yuklanmoqda...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (requiredRole && profile?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;