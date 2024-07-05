import { create } from "zustand";

type EditColumnModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useEditColumnModal = create<EditColumnModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditColumnModal;
