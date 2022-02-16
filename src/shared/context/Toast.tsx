import { createContext, ReactNode, VFC } from "react";
import {
  toast,
  ToastContainer,
  ToastContent,
  ToastOptions,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type ToastProviderType = {
  children: ReactNode;
};

type ToastContextProps = {
  notify: (
    content: ToastContent,
    options?: ToastOptions<{}> | undefined
  ) => void;
};

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider: VFC<ToastProviderType> = ({ children }) => {
  const notify = (
    content: ToastContent,
    options?: ToastOptions<{}> | undefined
  ) => toast.dark(content, { ...options });

  return (
    <ToastContext.Provider value={{ notify }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
