import { create } from "zustand";

type AddWorkspaceModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useAddWorkspaceModal = create<AddWorkspaceModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddWorkspaceModal;
