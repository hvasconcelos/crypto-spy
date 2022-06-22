import React, { useState, useContext } from "react";
import config from "../config";
import PricePage from "./prices-page";
import SettingsPage from "./settings-page";
import Footer from "./footer";
import NavBar from "./nav-bar";
import { BaseLayout } from "../styles/global";
import SettingsContext from "../settings";

const Main = () => {
  const [page, setPage] = useState("PRICES");
  const { refreshInterval, baseCurrency } = useContext(SettingsContext);
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  const currenciesConfig = config.coins.map((cur) => cur.id);
  const { theme } = useContext(SettingsContext);

  return (
    <BaseLayout theme={theme}>
      <NavBar onChangePage={(newPage) => setPage(newPage)} />
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
      <Footer loading={loading} lastUpdate={updatedAt} />
    </BaseLayout>
  );
};

export default Main;