import { create } from "zustand";

type AddBoardModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddBoardModal = create<AddBoardModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddBoardModal;
