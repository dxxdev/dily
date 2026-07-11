// src/components/LeaveReviewModal.jsx
import { useState } from "react";
import { Modal, Rate, Input, message } from "antd";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

const LeaveReviewModal = ({ request, open, onClose, onSubmitted }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    const { error } = await supabase.from("reviews").insert({
      request_id: request.id,
      customer_id: user.id,
      provider_id: request.provider_id,
      rating,
      comment,
    });
    setSending(false);
    if (error) return message.error(error.message);
    message.success("Rahmat! Sharhingiz qo'shildi.");
    onSubmitted();
    onClose();
  };

  return (
    <Modal title="Ishni baholang" open={open} onCancel={onClose} onOk={handleSubmit} confirmLoading={sending}>
      <Rate value={rating} onChange={setRating} className="mb-4" />
      <Input.TextArea rows={3} placeholder="Fikringiz (ixtiyoriy)" value={comment} onChange={(e) => setComment(e.target.value)} />
    </Modal>
  );
};

export default LeaveReviewModal;