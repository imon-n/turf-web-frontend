"use client";

import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();

  const [role, setRole] = useState<string | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    if (!user?.uid) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    setRoleLoading(true);

    axiosInstance
      .get(`/api/users/me/${user.uid}/role`)
      .then((res) => {
        setRole(res.data.role);
      })
      .catch((err) => {
        console.error("Role fetch error:", err);
        setRole(null);
      })
      .finally(() => {
        setRoleLoading(false);
      });
  }, [user, loading, axiosInstance]);

  return { role, roleLoading };
};

export default useUserRole;