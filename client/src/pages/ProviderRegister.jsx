// src/pages/ProviderRegister.jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const ProviderRegister = () => {
  const { user, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    bio: "",
    selectedCategories: [], // [{ category_id, price_from }]
  });

  useEffect(() => {
    supabase.from("service_categories").select("*").then(({ data }) => setCategories(data || []));
  }, []);

  const toggleCategory = (categoryId) => {
    setForm((prev) => {
      const exists = prev.selectedCategories.find((c) => c.category_id === categoryId);
      if (exists) {
        return { ...prev, selectedCategories: prev.selectedCategories.filter((c) => c.category_id !== categoryId) };
      }
      return { ...prev, selectedCategories: [...prev.selectedCategories, { category_id: categoryId, price_from: 0 }] };
    });
  };

  const handleSubmit = async () => {
    if (!user) return message.error("Avval ro'yxatdan o'ting");
    if (form.selectedCategories.length === 0) return message.error("Kamida bitta xizmat turini tanlang");

    try {
      // 1. Rolni "provider"ga o'zgartirish
      await supabase.from("profiles").update({ role: "provider" }).eq("id", user.id);

      // 2. provider_profiles yaratish
      const { error: providerError } = await supabase
        .from("provider_profiles")
        .upsert({ id: user.id, bio: form.bio, is_verified: false });
      if (providerError) throw providerError;

      // 3. Xizmat turlarini bog'lash
      const rows = form.selectedCategories.map((c) => ({ provider_id: user.id, ...c }));
      const { error: servicesError } = await supabase.from("provider_services").upsert(rows);
      if (servicesError) throw servicesError;

      message.success("Ariza yuborildi! Admin tasdiqlashini kuting.");
      refreshProfile();
      navigate("/provider/pending");
    } catch (err) {
      message.error("Xatolik: " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">Usta sifatida ro'yxatdan o'tish</h2>
      <textarea
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="O'zingiz haqingizda qisqacha..."
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => toggleCategory(cat.id)}
            className={`border rounded-lg p-3 text-left ${
              form.selectedCategories.find((c) => c.category_id === cat.id) ? "bg-cyan-100 border-cyan-500" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <button className="btn w-full" onClick={handleSubmit}>
        Arizani yuborish
      </button>
    </div>
  );
};

export default ProviderRegister;