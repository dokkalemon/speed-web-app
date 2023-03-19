import { create } from "zustand";

interface IUseLoadingProps {
  loading: number;
  startLoading: (site: number) => void;
  stopLoading: VoidFunction;
}

const useLoading = create<IUseLoadingProps>((set) => ({
  loading: 0,
  startLoading: (site: number) => set(() => ({ loading: site })),
  stopLoading: () => set(() => ({ loading: 0 })),
}));

export { useLoading };
