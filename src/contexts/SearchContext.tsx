import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IDomainProps } from "types/domains";

interface ISearchSiteContextProps {
  domains: IDomainProps[];
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
  const [domains, setDomains] = useState<IDomainProps[]>([]);
  const [activeSite, setActiveSite] = useState<number>(0);
  const addDomain = (site: string) => {
    setDomains([...domains, { domain: site, results: null }]);
  };

  const removeDomain = (site: string) => {
    const filteredDomains = domains.filter((el) => el.domain !== site);
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
