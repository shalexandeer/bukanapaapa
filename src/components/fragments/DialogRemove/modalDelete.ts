export const closeModalDelete = (): void => {
  (document.getElementById("my_modal_4") as HTMLDialogElement)?.close();
};

export const showModalDelete = (): void => {
  (document.getElementById("my_modal_4") as HTMLDialogElement)?.showModal();
};
