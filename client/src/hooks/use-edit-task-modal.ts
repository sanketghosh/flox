import { create } from "zustand";

type EditTaskModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useEditTaskModal = create<EditTaskModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditTaskModal;
