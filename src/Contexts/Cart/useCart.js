import { useContext } from "react";
import { CartContext } from "./CartProvider";

export default function useCart() {
  // pega todo o context e só retorna
  // esse useCart() é só pra ficar mais fácil importar
  const cartContext = useContext(CartContext);

  return cartContext;
}
