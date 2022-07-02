import { useState, useContext } from "react";
import PricePage from "../price-page";
import SettingsPage from "../settings-page";
import Footer from "../footer";
import SettingsContext from "../../settings";
import * as Styles from "./styles";

const Main = () => {
  const [page, setPage] = useState("PRICES");
  const { refreshInterval, coins, baseCurrency } = useContext(SettingsContext);
  const [updatedAt, setUpdatedAt] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);
  
  return (
    <Styles.MainContainer>
      {page === "PRICES" && (
        <>
          <PricePage
            coins={coins}
            baseCurrency={baseCurrency}
            refreshDelay={refreshInterval}
            onUpdate={() => setUpdatedAt(new Date())}
            onLoading={(isLoading) => setLoading(isLoading)}
          />
          <Footer
            loading={loading}
            lastUpdate={updatedAt}
            onChangePage={(newPage) => setPage(newPage)}
          />
        </>
      )}
      {page === "SETTINGS" && (
        <SettingsPage onChangePage={(newPage) => setPage(newPage)} />
      )}
    </Styles.MainContainer>
  );
};

export default Main;
