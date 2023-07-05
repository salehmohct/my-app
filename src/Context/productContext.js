import { createContext, useContext } from "react";
import { Products } from "../Mook/Product";

const productContext = createContext(null);
const ProductProvider = ({ children }) => {
  return (
    <productContext.Provider value={Products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
export const useProductContext = () => {
  return useContext(productContext);
};
