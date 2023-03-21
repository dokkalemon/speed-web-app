export interface IModalProps {
  onClose: VoidFunction;
  data: IModalDataProps;
}

interface IModalDataProps {
  site: string | null;
  index: number;
}
