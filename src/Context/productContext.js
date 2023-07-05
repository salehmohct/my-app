import { createContext } from "react";
import { Products } from "../Mook/Product";

export const productContext = createContext(null);
const ProductProvider = ({ children }) => {
  return (
    <productContext.Provider value={Products}>{children}</productContext.Provider>
  );
};

export default ProductProvider;
