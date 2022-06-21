import { useState } from "react";
import { coins } from "./config";
// import NavBar from "./components/nav-bar";
import PricePage from "./components/price-page";
// import Footer from "./components/footer";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("PRICES");
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  const currenciesConfig = coins.map((cur) => cur.id);

  return (
    <>
      {/* <NavBar onChangePage={(newPage) => setPage(newPage)} /> */}
      {page === "PRICES" && (
        <PricePage
          currencies={currenciesConfig}
          baseCurrency="eur"
          refreshDelay={60000}
          onUpdate={() => setUpdatedAt(new Date())}
          onLoading={(isLoading) => setLoading(isLoading)}
        />
      )}
      {/* <Footer loading={loading} lastUpdate={updatedAt} /> */}
    </>
  );
}

export default App;
