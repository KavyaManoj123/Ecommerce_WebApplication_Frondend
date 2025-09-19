import { toast } from "react-hot-toast";

export const useToast = () => {
  const showToast = (status, message) => {
    switch (status) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "loading":
        toast.loading(message);
        break;
      default:
        toast(message); // neutral/info
    }
  };

  return { showToast };
};
