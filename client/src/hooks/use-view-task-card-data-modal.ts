import { create } from "zustand";

type ViewTaskCardDataModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useViewTaskCardDataModal = create<ViewTaskCardDataModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useViewTaskCardDataModal;
