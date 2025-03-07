import "./App.css";
import "./index.css";
import Login from "./views/publicView/Login";
import Signup from "./views/AuthenticateView/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./views/AuthenticateView/WebsiteLayout";
import UserDashboard from "./views/AuthenticateView/UserDashboard";
import CreatProperty from "./views/AuthenticateView/Seller/CreatProperty";
import MyProperty from "./views/AuthenticateView/Seller/MyProperty";
import NoPage from "./views/publicView/NoPage";
import PropertyDetails from "./views/AuthenticateView/Seller/PropertyDetails";
import Account from "./views/AuthenticateView/pages/Account";
import Forgot from "./views/publicView/Forgot";
import PropertyEdit from "./views/AuthenticateView/Seller/PropertyEdit";
import HelpAndSupport from "./views/AuthenticateView/pages/HelpAndSupport";
import PrivacyAndPolicies from "./views/AuthenticateView/pages/PrivacyAndPolicies";
import EditUserDetails from "./views/AuthenticateView/pages/EditUserDetails";
import AllProperty from "./views/AuthenticateView/Buyer/AllProperty";
import Wishlist from "./views/AuthenticateView/Buyer/Wishlist";
import SpecificProperty from "./views/AuthenticateView/Buyer/SpecificProperty";
import BuyerDashboard from "./views/AuthenticateView/Buyer/BuyerDashboard";
import RequestedProperties from "./views/AuthenticateView/Seller/RequestedProperties";
import LandingPage from "./views/AuthenticateView/pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
        <Route path="/Signup-Now" element={<Signup />}></Route>

        {/* seller website layout start */}
        <Route path="/seller-dashboard" element={<WebsiteLayout />}>
          <Route index element={<UserDashboard />}></Route>
          <Route path="create" element={<CreatProperty />}></Route>
          <Route path="my-property" element={<MyProperty />}></Route>
          <Route
            path="get-specific-property/:id"
            element={<PropertyDetails />}
          ></Route>
          <Route path="property/:id/edit" element={<PropertyEdit />}></Route>
          <Route path="account-information" element={<Account />}></Route>
          <Route path="help-and-support" element={<HelpAndSupport />}></Route>
          <Route
            path="privacy-and-policies"
            element={<PrivacyAndPolicies />}
          ></Route>
          <Route
            path="requested-properties"
            element={<RequestedProperties />}
          ></Route>

          <Route path="edit-details" element={<EditUserDetails />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
        {/* seller website layout end */}

        {/* buyer website layout start */}
        <Route path="/buyer-dashboard" element={<WebsiteLayout />}>
          <Route index element={<BuyerDashboard />}></Route>
          <Route
            path="specific/get-specific-property/:id"
            element={<SpecificProperty />}
          ></Route>
          <Route path="account-information" element={<Account />}></Route>
          <Route path="help-and-support" element={<HelpAndSupport />}></Route>
          <Route
            path="privacy-and-policies"
            element={<PrivacyAndPolicies />}
          ></Route>

          <Route path="edit-details" element={<EditUserDetails />}></Route>

          <Route path="all-property" element={<AllProperty />}></Route>
          <Route path="my-wishlist" element={<Wishlist />}></Route>

          <Route path="*" element={<NoPage />}></Route>
        </Route>
        {/* buyer websiter layout end */}

        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
