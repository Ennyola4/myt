import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import PriceListing from "./pages/PriceListing";
import EventsPromotions from "./pages/EventsPromotions";
import LoungeMenu from "./pages/LoungeMenu";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-listing" element={<PriceListing />} />
        <Route path="/events-promotions" element={<EventsPromotions />} />
        <Route path="/lounge-menu" element={<LoungeMenu />} />

      </Routes>
    </div>
  );
};

export default App;
