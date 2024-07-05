import { create } from "zustand";

type AddColumnModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddColumnModal = create<AddColumnModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddColumnModal;
