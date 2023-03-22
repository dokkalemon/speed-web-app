export interface IDomainProps {
  domain: string;
  results: any | null;
  status: 200 | 500 | null;
  errorMessage?: string;
}
