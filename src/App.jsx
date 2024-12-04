import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Men from './pages/Men/Men';
import Payment from './pages/Payment/Payment';
import TransactionProcessing from './pages/TransactionProcessing/TransactionProcessing';
import OrderSuccessful from './pages/Success/OrderSuccessful';
import Women from './pages/Women/Women';
import Kid from './pages/Kids/Kids';
import Brand from './pages/Brands/Brand';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kid />} />
            <Route path="/brands" element={<Brand />} />
            <Route
              path="/singleProduct/:productId"
              element={<SingleProduct />}
            />
            <Route
              path="/singleProduct/:productId/payment1"
              element={<Payment tag="buy" />}
            />
            <Route
              path="/singleProduct/:productId/payment2"
              element={<Payment tag="try" />}
            />
            <Route
              path="/transactionProcessing"
              element={<TransactionProcessing />}
            />
            <Route path="/paymentSuccessful" element={<OrderSuccessful />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
