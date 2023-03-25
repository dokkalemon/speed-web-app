import { AlertColor } from "@mui/material";
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IDomainProps } from "types/domains";

interface ISnackbarProps {
  variant: AlertColor;
  message: string;
  visible: boolean;
}

const SnackbarInitialState: ISnackbarProps = {
  variant: "info",
  message: "",
  visible: false,
};

interface IDomainsContextProps {
  domains: string[];
  setDomains: Dispatch<SetStateAction<string[]>>;
  statistics: IDomainProps[];
  setStatistics: Dispatch<SetStateAction<IDomainProps[]>>;
  snackbar: ISnackbarProps;
  setSnackbar: Dispatch<SetStateAction<ISnackbarProps>>;
}

const initialState: IDomainsContextProps = {
  domains: [],
  setDomains: () => {},
  statistics: [],
  setStatistics: () => {},
  snackbar: SnackbarInitialState,
  setSnackbar: () => {},
};

const DomainsContext = createContext(initialState);

interface IDomainsProviderProps {
  children: ReactNode;
}

const DomainsProvider = ({ children }: IDomainsProviderProps) => {
  const [domains, setDomains] = useState<string[]>([]);
  const [statistics, setStatistics] = useState<IDomainProps[]>([]);
  const [snackbar, setSnackbar] = useState<ISnackbarProps>(SnackbarInitialState);
  return (
    <DomainsContext.Provider
      value={{
        domains,
        setDomains,
        statistics,
        setStatistics,
        snackbar,
        setSnackbar,
      }}
    >
      {children}
    </DomainsContext.Provider>
  );
};

export { DomainsProvider, DomainsContext };
