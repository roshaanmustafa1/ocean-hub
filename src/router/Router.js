import { Route, Routes, Outlet } from "react-router-dom";
import HomeView from "../pages/HomeView";
import SignupView from "../pages/SignupView";
import NotFound from "../pages/NotFound";
import LoginView from "../pages/LoginView";
import AboutView from "../pages/AboutView";
import ContactUsView from "../pages/ContactUsView";
import ShopView from "../pages/ShopView";
import CartPage from "../pages/CartPage";
import CheckOut from "../pages/CheckOut";


const Layout = () => {
  return (
    <div className="min-h-[calc(100vh-96px)]">
      <Outlet />
    </div>
  );
};

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact-us" element={<ContactUsView />} />
          <Route path="/shop" element={<ShopView />} />
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
