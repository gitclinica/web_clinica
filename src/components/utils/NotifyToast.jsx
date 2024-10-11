import { Bounce, toast } from "react-toastify";

export const NotifyError = ({ title, message }) => {
  const audio = new Audio("sound/notification.mp3");
  audio.play();

  return toast.error(
    <div>
      <strong>{title}</strong>
      <div>{message}</div>
    </div>,
    {
      className: "toast-message",
      position: "bottom-center",
      theme: "colored",
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      limit: 3,
      closeOnClick: true,
      icon: false,
      transition: Bounce,
      hideProgressBar: true,
    }
  );
};

export const NotifySucess = ({ title, message }) => {
  const audio = new Audio("sound/notification.mp3");
  audio.play();

  return toast.success(
    <div>
      <strong>{title}</strong>
      <div>{message}</div>
    </div>,
    {
      className: "toast-message",
      position: "bottom-center",
      theme: "colored",
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      limit: 3,
      closeOnClick: true,
      icon: false,
      transition: Bounce,
      hideProgressBar: true,
    }
  );
};
