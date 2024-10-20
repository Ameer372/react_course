import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
