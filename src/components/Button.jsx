import React from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line valid-jsdoc
/**
 *
 * @param {{title: String | Number, loading:Boolean,className: String,disabled: Boolean, onClick: Function, errorMessage: String, Icon: {name: String, color: String, size: Number}}} param0
 * @returns
 */
function Button({
  title,
  onClick,
  buttonLabelStyle,
  icon,
  color,
  style,
  bgColor,
  height,
  radius,
  loading,
  disabled,
  className
}) {
  const classNameCheck = `flex items-center justify-center rounded-full transition-all px-3 font-medium w-max ${disabled ? "opacity-50 cursor-not-allowed" : "active:scale-95 cursor-pointer"}`
  console.log(title, disabled);
  return (
    <button
      style={{
        border: "1px solid " + bgColor,
        // width: "100%",
        // backgroundColor: bgColor ?? "#fff",
        overflow: "hidden",
        // color: color ?? "black",
        // borderRadius: radius ?? 5,
        ...style,
      }}
      onClick={onClick}
      disabled={loading || disabled}
      className={twMerge([classNameCheck, className])}
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
            {icon?.name && icon.position !== "right" && (
            <icon.name
              color={icon?.color ?? color ?? "gray"}
              style={{}}
              size={icon?.size ?? 15}
            />
          )}
            <span
              className="font-semibold"
              style={{
              marginLeft: 7,
              marginRight: 7,
              ...buttonLabelStyle,
            }}
          >
            {title}
            </span>
            {icon?.name && icon.position === "right" && (
            <icon.name
              color={icon?.color ?? color ?? "gray"}
              style={{}}
              size={icon?.size ?? 15}
            />
          )}
        </>
      )}
    </button>
  );
}

export default Button;
