import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

interface ISearchSiteContextProps {
  domains: string[];
  activeSite: number;
  addDomain: (site: string) => void;
  removeDomain: (site: string) => void;
  setActiveSite: Dispatch<SetStateAction<number>>;
}

const initialState: ISearchSiteContextProps = {
  domains: [],
  activeSite: 1,
  addDomain: (site: string) => {},
  removeDomain: (site: string) => {},
  setActiveSite: () => {},
};

const SearchSiteContext = createContext(initialState);

interface ISearchSiteProviderProps {
  children: ReactNode;
}

const SearchSiteProvider = ({ children }: ISearchSiteProviderProps) => {
  const [domains, setDomains] = useState<string[]>([]);
  const [activeSite, setActiveSite] = useState<number>(0);
  const addDomain = (site: string) => {
    setDomains([...domains, site]);
  };

  const removeDomain = (site: string) => {
    const filteredDomains = domains.filter((el) => el !== site);
    setDomains(filteredDomains);
  };

  return (
    <SearchSiteContext.Provider
      value={{ domains: domains, addDomain, removeDomain, activeSite: activeSite, setActiveSite }}
    >
      {children}
    </SearchSiteContext.Provider>
  );
};

export { SearchSiteProvider, SearchSiteContext };
