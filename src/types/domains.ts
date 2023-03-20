export interface IDomainProps {
  domain: string;
  results: any;
  status: 200 | 500 | null;
  errorMessage?: string;
}
