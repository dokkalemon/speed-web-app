export interface IResultsProps {
  sites: string[]; //TODO: fix types with real data
  deleteSite: (site: string) => void;
}
