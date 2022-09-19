import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  data: [],
  isLoading: false,
});

export default function ProductsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      function fetchData() {
        axios
          .get("https://corebiz-test.herokuapp.com/api/v1/products")
          .then((response) => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {});
      }

      fetchData();
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ProductContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
