import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
});

export default function CartProvider({ children }) {
  // cria o state com o array de itens, passando o valor default o valor que está no local storage ou um array vazio caso não tenha salvo ainda no localStorage
  const cartLocalStorage = localStorage.getItem("cart");
  const [cart, setCart] = useState(
    cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  );

  const addItem = (item) => {
    // adiciona um item novo ao retornar um novo array com o novo "item" e todos os outros que já existem "...cart"
    setCart((cart) => [item, ...cart]);
  };
  const removeItem = (item) => {
    // remove o item filtrando e retornando o array pelo productId
    // !! aparentemente pelo layout não vai ter essa funcionalidade, mas não custa nada deixar ela pronta aqui
    setCart((cart) => cart.filter((i) => i.productId !== item.productId));
  };

  // sempre que o cart mudar de valor, salva ele no local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    // retorna no value o cart e as funções pra adicionar e remover
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
