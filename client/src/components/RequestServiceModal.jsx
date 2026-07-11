// src/components/RequestServiceModal.jsx
import { useState } from "react";
import { Modal, Input, message } from "antd";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

const RequestServiceModal = ({ provider, categoryId, open, onClose }) => {
  const { user } = useAuth();
  const [description, setDescription] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!user) return message.error("Avval tizimga kiring");
    setSending(true);
    const { error } = await supabase.from("service_requests").insert({
      customer_id: user.id,
      provider_id: provider.id,
      category_id: categoryId,
      description,
      status: "pending",
    });
    setSending(false);
    if (error) return message.error(error.message);
    message.success("So'rov yuborildi! Usta javobini kuting.");
    onClose();
  };

  return (
    <Modal title={`${provider.profiles.full_name}ga so'rov`} open={open} onCancel={onClose} onOk={handleSend} confirmLoading={sending}>
      <Input.TextArea
        rows={4}
        placeholder="Muammoni qisqacha tasvirlab bering..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};

export default RequestServiceModal;