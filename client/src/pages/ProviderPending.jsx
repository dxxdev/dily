// src/pages/ProviderPending.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProviderPending = () => {
  const { user, profile } = useAuth();
  const [status, setStatus] = useState(null); // "pending" | "verified" | null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("provider_profiles")
      .select("is_verified")
      .eq("id", user.id)
      .single()
      .then(({ data }) => {
        setStatus(data ? (data.is_verified ? "verified" : "pending") : null);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div className="p-12 text-center">Yuklanmoqda...</div>;

  // Agar allaqachon tasdiqlangan bo'lsa — to'g'ridan-to'g'ri kabinetga yo'naltirish
  if (status === "verified") return <Navigate to="/provider/requests" replace />;

  // Agar umuman ariza topilmasa — ro'yxatdan o'tish sahifasiga qaytarish
  if (!status) return <Navigate to="/provider/register" replace />;

  return (
    <div className="max-w-xl mx-auto py-20 text-center">
      <div className="text-5xl mb-4">⏳</div>
      <h2 className="text-2xl font-semibold mb-3">Arizangiz ko'rib chiqilmoqda</h2>
      <p className="text-gray-500">
        Salom, {profile?.full_name || "foydalanuvchi"}! Admin sizning ma'lumotlaringizni
        tekshirmoqda. Tasdiqlangach, ustalar kabinetiga kirishingiz mumkin bo'ladi.
        Odatda bu 1-2 ish kuni ichida amalga oshadi.
      </p>
    </div>
  );
};

export default ProviderPending;