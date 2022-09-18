import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function useAuth() {
  const { data, isLoading } = useContext(AuthContext);

  return { data, isLoading };
}
