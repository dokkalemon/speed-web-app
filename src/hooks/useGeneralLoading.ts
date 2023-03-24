import { create } from "zustand";

interface IUseLoadingProps {
  loading: boolean;
  startLoading: VoidFunction;
  stopLoading: VoidFunction;
}

const useGeneralLoading = create<IUseLoadingProps>((set) => ({
  loading: false,
  startLoading: () => set(() => ({ loading: true })),
  stopLoading: () => set(() => ({ loading: false })),
}));

export { useGeneralLoading };
