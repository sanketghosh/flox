import { create } from "zustand";

type AddNewTaskModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddNewTaskModal = create<AddNewTaskModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddNewTaskModal;
