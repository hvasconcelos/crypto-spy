import { useContext } from "react";
import { rem } from "polished";
import { Spinner, Icon } from "@taikai/rocket-kit";
import SettingsContext from "../../settings";
import * as Styles from "./styles";

interface FooterProps {
  loading: boolean;
  lastUpdate: Date;
  onChangePage: (page: string) => void;
}

const Footer = (props: FooterProps) => {
  const { loading, lastUpdate, onChangePage } = props;
  const { theme } = useContext(SettingsContext);

  return (
    <Styles.Wrapper theme={theme}>
      <div className="info">
        <button
          onClick={() => {
            onChangePage("SETTINGS");
          }}
        >
          <Icon icon="settings" />
        </button>
        {loading ? (
          <Spinner size={rem("14px")} />
        ) : (
          <>
            <Icon icon="timeline" />
            <span>{lastUpdate.toLocaleString()}</span>
          </>
        )}
      </div>
      <div className="copyright">
        <span>
          Powered by{" "}
          <a
            href="https://taikai.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            TAIKAI Labs
          </a>
        </span>
      </div>
    </Styles.Wrapper>
  );
};

export default Footer;
