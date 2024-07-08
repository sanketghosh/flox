import { create } from "zustand";

type AddEmployeeModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddEmployeeModal = create<AddEmployeeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddEmployeeModal;
