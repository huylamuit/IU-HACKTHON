import Login from "./components/Login/Login";
import ReceiverList from "./components/ReceiverList/ReceiverList";
import Register from "./components/Register/Registe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Donation from "./pages/Donation/Donation";
import OurStory from "./pages/OurStory/OurStory";
import Vouchers from "./pages/Vouchers/Vouchers";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import Admin from "./pages/Admin/Admin";
import "./__global.scss";
import History from "./pages/History/History";
import MyVouchers from "./pages/MyVouchers/MyVouchers";
import UserInfo from "./pages/UserInfo/UserInfo";
import Donors from "./pages/Donors/Donors";
import Recharge from "./pages/Recharge/Recharge";
import DonePayment from "./pages/DonePayment/DonePayment";
import Transaction from "./pages/Transaction/Transaction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Certificate from "./pages/Certificate/Certificate";
import Receiver from "./pages/Receiver/Receiver";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzKcz0DfnNr8xWFfrir_ArQXbyHovBK0",
  authDomain: "reacthackathon-cd18a.firebaseapp.com",
  projectId: "reacthackathon-cd18a",
  storageBucket: "reacthackathon-cd18a.appspot.com",
  messagingSenderId: "56881570076",
  appId: "1:56881570076:web:db19068fad7fef95815ad9",
  measurementId: "G-JEZXQER9YF",
};

// Initialize Firebase

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receiver" element={<ReceiverList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/work" element={<HowWeWork />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/certificate/:id" element={<Certificate />} />
        <Route path="/receiver/:id" element={<Receiver />} />
        <Route
          path="/admin/voucher/edit/:id"
          element={<Admin route="/admin/voucher/edit" />}
        />
        <Route path="/history" element={<History />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/donepayment" element={<DonePayment />} />
        <Route path="/myvoucher" element={<MyVouchers />} />
        <Route path="/transaction/:id" element={<Transaction />} />
        <Route
          path="/admin/voucher/add"
          element={<Admin route="/admin/voucher/add" />}
        />
        <Route
          path="/admin/voucher/list"
          element={<Admin route="/admin/voucher/list" />}
        />
        <Route
          path="/admin/receiver/add"
          element={<Admin route="/admin/receiver/add" />}
        />
        <Route
          path="/admin/receiver/list"
          element={<Admin route="/admin/receiver/list" />}
        />
        <Route
          path="/admin/supplier/add"
          element={<Admin route="/admin/supplier/add" />}
        />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
