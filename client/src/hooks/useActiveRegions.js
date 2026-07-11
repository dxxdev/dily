// src/hooks/useActiveRegions.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useActiveRegions = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    supabase
      .from("active_regions")
      .select("city")
      .eq("is_active", true)
      .then(({ data }) => setRegions((data || []).map((r) => r.city)));
  }, []);

  return regions;
};