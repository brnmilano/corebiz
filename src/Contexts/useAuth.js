import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function useAuth() {
  const { dados, isLoading } = useContext(AuthContext);

  const nomeItem = dados.find((item) => item.info === "Nome:") ?? {};

  return { dados, isLoading, nome: nomeItem.content,};
}
