import { create } from "zustand";

type EditEmployeeModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useEditEmployeeModal = create<EditEmployeeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditEmployeeModal;
