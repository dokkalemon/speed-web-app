export interface IDomainProps {
  domain: string;
  results: IResultsProps | null;
  status: 200 | 500 | null;
  errorMessage?: string;
  id: string;
}

export interface IResultsProps {
  primaryCategories: IPrimaryCategoryProps[] | null;
  performance: IPerformanceResultProps[] | null;
  warningsAndSettings: IWarningAndSettingsProps | null;
}

export interface IPrimaryCategoryProps {
  description?: string | undefined;
  fill: string;
  label: string;
  manualDescription?: string | undefined;
  score: number;
}

export interface IPerformanceResultProps {
  description?: string | undefined;
  displayValue: string;
  id: string;
  numericUnit: string;
  numericValue: number;
  score: number;
  scoreDisplayMode: string;
  title: string;
}

export interface IWarningAndSettingsProps {
  runWarnings: string;
  environment: string;
}
