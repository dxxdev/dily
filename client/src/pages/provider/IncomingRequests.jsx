// src/pages/provider/IncomingRequests.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import { message, notification } from "antd";

const statusLabels = {
  pending: "Yangi",
  accepted: "Qabul qilindi",
  rejected: "Rad etildi",
  in_progress: "Bajarilmoqda",
  completed: "Tugallandi",
  cancelled: "Bekor qilindi",
};

const IncomingRequests = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    const { data } = await supabase
      .from("service_requests")
      .select("*, profiles!service_requests_customer_id_fkey(full_name, phone), service_categories(name)")
      .eq("provider_id", user.id)
      .order("created_at", { ascending: false });
    setRequests(data || []);
  };

  useEffect(() => {
    if (!user) return;
    loadRequests();

    // Real-time: yangi so'rov kelganda darhol bildirishnoma va ro'yxatni yangilash
    const channel = supabase
      .channel(`provider-requests-${user.id}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "service_requests", filter: `provider_id=eq.${user.id}` },
        (payload) => {
          notification.info({ message: "Yangi so'rov keldi!" });
          loadRequests();
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [user]);

  const updateStatus = async (requestId, status) => {
    const { error } = await supabase.from("service_requests").update({ status }).eq("id", requestId);
    if (error) return message.error(error.message);
    loadRequests();
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Kelgan so'rovlar</h2>
      <div className="flex flex-col gap-4">
        {requests.map((r) => (
          <div key={r.id} className="border rounded-lg p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{r.profiles?.full_name} — {r.service_categories?.name}</p>
                <p className="text-sm text-gray-500">{r.profiles?.phone}</p>
                <p className="text-sm">{r.description}</p>
                <p className="text-xs text-cyan-700 mt-1">{statusLabels[r.status]}</p>
              </div>
              <div className="flex gap-2 items-start">
                {r.status === "pending" && (
                  <>
                    <button className="btn" onClick={() => updateStatus(r.id, "accepted")}>Qabul qilish</button>
                    <button className="btn-secondary" onClick={() => updateStatus(r.id, "rejected")}>Rad etish</button>
                  </>
                )}
                {r.status === "accepted" && (
                  <button className="btn" onClick={() => updateStatus(r.id, "in_progress")}>Ishni boshlash</button>
                )}
                {r.status === "in_progress" && (
                  <button className="btn" onClick={() => updateStatus(r.id, "completed")}>Yakunlash</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingRequests;