import { toast } from "react-toastify";

  const notify = (msg, type) => {
    if (type === "warn") {
      toast.warn(msg);
    } else if (type === "error") {
      toast.error(msg);
    } else if (type === "success") {
      toast.success(msg);
    }
  };

  export default notify