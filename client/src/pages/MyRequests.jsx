// src/pages/MyRequests.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import LeaveReviewModal from "../components/LeaveReviewModal";

const statusLabels = {
  pending: "Yuborildi, javob kutilmoqda",
  accepted: "Qabul qilindi",
  rejected: "Rad etildi",
  in_progress: "Bajarilmoqda",
  completed: "Tugallandi",
  cancelled: "Bekor qilindi",
};

const statusColors = {
  pending: "text-yellow-600",
  accepted: "text-blue-600",
  rejected: "text-red-500",
  in_progress: "text-cyan-600",
  completed: "text-green-600",
  cancelled: "text-gray-400",
};

const MyRequests = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [reviewedIds, setReviewedIds] = useState(new Set());
  const [reviewTarget, setReviewTarget] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRequests = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("service_requests")
      .select("*, provider_profiles(id, profiles(full_name, phone)), service_categories(name)")
      .eq("customer_id", user.id)
      .order("created_at", { ascending: false });
    setRequests(data || []);

    const { data: reviews } = await supabase
      .from("reviews")
      .select("request_id")
      .eq("customer_id", user.id);
    setReviewedIds(new Set((reviews || []).map((r) => r.request_id)));

    setLoading(false);
  };

  useEffect(() => {
    if (user) loadRequests();
  }, [user]);

  if (loading) return <div className="p-12 text-center">Yuklanmoqda...</div>;

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">Mening so'rovlarim</h2>
      <div className="flex flex-col gap-4">
        {requests.map((r) => (
          <div key={r.id} className="border rounded-lg p-4">
            <p className="font-semibold">
              {r.service_categories?.name} — {r.provider_profiles?.profiles?.full_name}
            </p>
            <p className="text-sm text-gray-500">{r.description}</p>
            <p className={`text-sm mt-1 ${statusColors[r.status]}`}>{statusLabels[r.status]}</p>

            {r.status === "completed" && !reviewedIds.has(r.id) && (
              <button className="btn mt-3" onClick={() => setReviewTarget(r)}>
                Baholash
              </button>
            )}
            {reviewedIds.has(r.id) && (
              <p className="text-xs text-gray-400 mt-2">✓ Siz bu ishni baholadingiz</p>
            )}
          </div>
        ))}
        {requests.length === 0 && (
          <p className="text-gray-500">Hozircha so'rov yubormadingiz</p>
        )}
      </div>

      {reviewTarget && (
        <LeaveReviewModal
          request={reviewTarget}
          open={!!reviewTarget}
          onClose={() => setReviewTarget(null)}
          onSubmitted={loadRequests}
        />
      )}
    </div>
  );
};

export default MyRequests;