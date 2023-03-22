import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IDomainProps } from "types/domains";

interface IDomainsContextProps {
  domains: string[];
  setDomains: Dispatch<SetStateAction<string[]>>;
  statistics: IDomainProps[];
  setStatistics: Dispatch<SetStateAction<IDomainProps[]>>;
}

const initialState: IDomainsContextProps = {
  domains: [],
  setDomains: () => {},
  statistics: [],
  setStatistics: () => {},
};

const DomainsContext = createContext(initialState);

interface IDomainsProviderProps {
  children: ReactNode;
}

const DomainsProvider = ({ children }: IDomainsProviderProps) => {
  const [domains, setDomains] = useState<string[]>([]);
  const [statistics, setStatistics] = useState<IDomainProps[]>([]);

  return (
    <DomainsContext.Provider
      value={{
        domains,
        setDomains,
        statistics,
        setStatistics,
      }}
    >
      {children}
    </DomainsContext.Provider>
  );
};

export { DomainsProvider, DomainsContext };
