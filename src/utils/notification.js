import { toast, Slide } from "react-toastify";

export const errorNotification = (message) => {
  toast.error(message, {
    position: "top-left",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
  });
};

export const successNotification = (message) => {
  toast.success(message, {
    position: "top-left",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
  });
};
