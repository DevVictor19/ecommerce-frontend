import { useId } from 'react';

export function usePaidActionsViewModel() {
  const modalId = useId();

  const handleOpenModal = () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(modalId) as any).showModal();

  return {
    modalId,
    handleOpenModal,
  };
}
