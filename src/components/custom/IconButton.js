import { Icon } from "@iconify/react";

const IconButton = ({
  text,
  onClick,
  className,
  iconRight,
  icon,
  ...props
}) => {
  return (
    <button
      className={`btn ${className} d-flex gap-2 align-items-center justify-content-between`}
      onClick={onClick}
      {...props}
    >
      {!iconRight && <Icon icon={icon} fontSize={"25px"} />}
      <span style={{ textTransform: "capitalize" }}> {text}</span>
      {iconRight && <Icon icon={icon} fontSize={"25px"} />}
    </button>
  );
};

export default IconButton;
