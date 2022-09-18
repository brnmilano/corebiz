import { useContext } from "react";
import { ProductContext } from "./ProductsProvider";

export default function useProducts() {
  const { data, isLoading } = useContext(ProductContext);

  return { data, isLoading };
}
