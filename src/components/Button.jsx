import React from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line valid-jsdoc
/**
 *
 * @param {{title: String | Number, onChange: Function, errorMessage: String, Icon: {name: String, color: String, size: Number}}} param0
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
  className
}) {
  return (
    <button
      style={{
        border: "1px solid " + bgColor,
        // width: "100%",
        // backgroundColor: bgColor ?? "#fff",
        overflow: "hidden",
        cursor: "pointer",
        // color: color ?? "black",
        // borderRadius: radius ?? 5,
        ...style,
      }}
      onClick={onClick}
      disabled={loading}
      className={twMerge(["flex items-center justify-center rounded-full active:scale-95 transition-all px-3 font-medium w-max", className])}
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
          <div
              style={{
              marginLeft: 7,
              marginRight: 7,
              ...buttonLabelStyle,
            }}
          >
            {title}
          </div>
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
