import { useState, useContext } from "react";
import { coins } from "../config";
import PricePage from "./price-page";
import SettingsPage from "./settings-page";
// import Footer from "./footer";
import NavBar from "./nav-bar";
import SettingsContext from "../settings";

const Main = () => {
  const [page, setPage] = useState("PRICES");
  const { refreshInterval, baseCurrency } = useContext(SettingsContext);
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  const currenciesConfig = coins.map((cur) => cur.id);
  // const { theme } = useContext(SettingsContext);

  return (
    <>
      {/* <NavBar onChangePage={(newPage) => setPage(newPage)} /> */}
      {page === "PRICES" && (
        <PricePage
          currencies={currenciesConfig}
          baseCurrency={baseCurrency}
          refreshDelay={refreshInterval}
          onUpdate={() => setUpdatedAt(new Date())}
          onLoading={(isLoading) => setLoading(isLoading)}
        />
      )}
      {page === "SETTINGS" && <SettingsPage />}
      {/* <Footer loading={loading} lastUpdate={updatedAt} /> */}
    </>
  );
};

export default Main;
