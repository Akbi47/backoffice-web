import { Route, Routes } from "react-router-dom";
import Customers from "../../pages/customers";
import Dashboard from "../../pages/dashboard";
import Inventory from "../../pages/inventory";
import Orders from "../../pages/orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
