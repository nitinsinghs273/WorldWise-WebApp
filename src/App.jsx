import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Product/Products";
import Pricing from "./pages/Pricing/Pricing";
import Homepage from "./pages/HomePage/Homepage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./Components/Cities/CityList";
import CountryList from "./Components/CountryList/CountryList";
import City from "./Components/City/City";
import Form from "./Components/Form/Form";
import { CitiesProvider } from "./Components/Context/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Products />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
