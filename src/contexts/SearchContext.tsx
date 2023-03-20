import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IDomainProps } from "types/domains";

interface ISearchSiteContextProps {
  domains: IDomainProps[];
  activeSite: number;
  addDomain: (site: string) => void;
  removeDomain: (site: string) => void;
  updateDomain: (site: string, result: any[]) => void;
  setActiveSite: Dispatch<SetStateAction<number>>;
}

const initialState: ISearchSiteContextProps = {
  domains: [],
  activeSite: 1,
  addDomain: (site: string) => {},
  removeDomain: (site: string) => {},
  setActiveSite: () => {},
  updateDomain: (site: string, result: any[]) => {},
};

const SearchSiteContext = createContext(initialState);

interface ISearchSiteProviderProps {
  children: ReactNode;
}

const SearchSiteProvider = ({ children }: ISearchSiteProviderProps) => {
  const [domains, setDomains] = useState<IDomainProps[]>([]);
  const [activeSite, setActiveSite] = useState<number>(0);
  const addDomain = (site: string) => {
    setDomains([...domains, { domain: site, results: [] }]);
  };

  const removeDomain = (site: string) => {
    const filteredDomains = domains.filter((el) => el.domain !== site);
    setDomains(filteredDomains);
  };

  const updateDomain = (site: string, result: any[]) => {
    const filterDomains: IDomainProps[] = domains.filter((el) => el.domain === site);
    setDomains([...filterDomains, { domain: site, results: result }]);
  };

  return (
    <SearchSiteContext.Provider
      value={{
        domains: domains,
        addDomain,
        removeDomain,
        activeSite: activeSite,
        setActiveSite,
        updateDomain,
      }}
    >
      {children}
    </SearchSiteContext.Provider>
  );
};

export { SearchSiteProvider, SearchSiteContext };
