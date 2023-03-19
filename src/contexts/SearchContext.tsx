import { createContext, ReactNode, useState } from "react";

interface ISearchSiteContextProps {
  domains: string[];
  addDomain: (site: string) => void;
  removeDomain: (site: string) => void;
}

const initialState: ISearchSiteContextProps = {
  domains: [],
  addDomain: (site: string) => {},
  removeDomain: (site: string) => {},
};

const SearchSiteContext = createContext(initialState);

interface ISearchSiteProviderProps {
  children: ReactNode;
}

const SearchSiteProvider = ({ children }: ISearchSiteProviderProps) => {
  const [domains, setDomains] = useState<string[]>([]);

  const addDomain = (site: string) => {
    setDomains([...domains, site]);
  };

  const removeDomain = (site: string) => {
    const filteredDomains = domains.filter((el) => el !== site);
    setDomains(filteredDomains);
  };

  return (
    <SearchSiteContext.Provider value={{ domains: domains, addDomain, removeDomain }}>
      {children}
    </SearchSiteContext.Provider>
  );
};

export { SearchSiteProvider, SearchSiteContext };
