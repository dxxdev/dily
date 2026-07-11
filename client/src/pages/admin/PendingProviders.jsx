// src/pages/admin/PendingProviders.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import { message } from "antd";

const PendingProviders = () => {
  const { user } = useAuth();
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPending = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("provider_profiles")
      .select("*, profiles(full_name, phone, city, district), provider_services(price_from, service_categories(name))")
      .eq("is_verified", false);
    if (error) message.error("Yuklashda xatolik: " + error.message);
    setPending(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadPending();
  }, []);

  const handleVerify = async (providerId, approve) => {
    if (approve) {
      const { error } = await supabase
        .from("provider_profiles")
        .update({ is_verified: true })
        .eq("id", providerId);
      if (error) return message.error(error.message);
      await supabase.from("admin_actions_log").insert({
        admin_id: user.id,
        action: "verify_provider",
        target_id: providerId,
      });
      message.success("Usta tasdiqlandi");
    } else {
      // Rad etish — provider_profiles va profiles.role'ni customer'ga qaytarish
      await supabase.from("provider_profiles").delete().eq("id", providerId);
      await supabase.from("profiles").update({ role: "customer" }).eq("id", providerId);
      await supabase.from("admin_actions_log").insert({
        admin_id: user.id,
        action: "reject_provider",
        target_id: providerId,
      });
      message.info("Ariza rad etildi");
    }
    loadPending();
  };

  if (loading) return <div className="p-8">Yuklanmoqda...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Tasdiq kutayotgan ustalar ({pending.length})</h2>
      <div className="flex flex-col gap-4">
        {pending.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{p.profiles?.full_name}</p>
              <p className="text-sm text-gray-500">{p.profiles?.phone} — {p.profiles?.city}</p>
              <p className="text-sm">{p.bio}</p>
              <p className="text-sm text-cyan-700">
                {p.provider_services?.map((s) => s.service_categories?.name).join(", ")}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="btn" onClick={() => handleVerify(p.id, true)}>Tasdiqlash</button>
              <button className="btn-secondary" onClick={() => handleVerify(p.id, false)}>Rad etish</button>
            </div>
          </div>
        ))}
        {pending.length === 0 && <p className="text-gray-500">Hozircha kutayotgan arizalar yo'q</p>}
      </div>
    </div>
  );
};

export default PendingProviders;