// src/pages/FindProvider.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Select } from "antd";
import { useActiveRegions } from "../hooks/useActiveRegions"; // ← shu qator qo'shiladi

const FindProvider = () => {
  const cities = useActiveRegions(); // ← hardcoded massiv o'rniga shu
  const [categories, setCategories] = useState([]);
  const [city, setCity] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.from("service_categories").select("*").then(({ data }) => setCategories(data || []));
  }, []);

  const search = async () => {
    if (!city || !categoryId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("provider_profiles")
      .select(`
        id, bio, rating, total_reviews, is_available,
        profiles!inner(full_name, phone, city, district),
        provider_services!inner(price_from, category_id)
      `)
      .eq("is_verified", true)
      .eq("is_available", true)
      .eq("profiles.city", city)
      .eq("provider_services.category_id", categoryId)
      .order("rating", { ascending: false });

    if (error) console.error(error);
    setProviders(data || []);
    setLoading(false);
  };

  useEffect(() => {
    search();
  }, [city, categoryId]);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">Usta topish</h2>
      <div className="flex gap-4 mb-8">
        <Select placeholder="Shahar" className="w-48" onChange={setCity} options={cities.map((c) => ({ label: c, value: c }))} />
        <Select placeholder="Xizmat turi" className="w-64" onChange={setCategoryId} options={categories.map((c) => ({ label: c.name, value: c.id }))} />
      </div>

      {loading && <p>Qidirilmoqda...</p>}

      <div className="flex flex-col gap-4">
        {providers.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{p.profiles.full_name}</p>
              <p className="text-sm text-gray-500">{p.profiles.district}, {p.profiles.city}</p>
              <p className="text-sm">⭐ {p.rating.toFixed(1)} ({p.total_reviews} sharh)</p>
              <p className="text-sm">{p.bio}</p>
            </div>
            <a href={`tel:${p.profiles.phone}`} className="btn">Bog'lanish</a>
          </div>
        ))}
        {!loading && providers.length === 0 && city && categoryId && (
          <p className="text-gray-500">Bu shahar/xizmat bo'yicha usta topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default FindProvider;