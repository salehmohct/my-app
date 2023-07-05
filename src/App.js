import { useRoutes } from "react-router-dom";
import { router } from "./Router";
import Header from "./Components/Header";
import ProductProvider from "./Context/productContext";
function App() {
  const Router = useRoutes(router);
  // const locataion = useLocation(); تستخدم لفحص الموقع الي انا فيه يعني لو بدي اعمل كوندشنال ريندر بناء ع الموقع
  // console.log(locataion.pathname);
  return (
    <div className="App">
      <ProductProvider>
        <Header />
        {Router}
      </ProductProvider>
    </div>
  );
}

export default App;
