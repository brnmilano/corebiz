import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function useAuth() {
  const { dados, isLoading } = useContext(AuthContext);

  return { dados, isLoading };
}
