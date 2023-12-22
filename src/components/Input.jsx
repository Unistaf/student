/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param {
 *  {
 *    type: String,
 *    name: String,
 *    value: String | Number,
 *    onChange: Function,
 *    label: String,
 *    errorMessage: String,
 *    icon: {
 *      name: String,
 *      color: String,
 *      size: Number
 *    },
 *    style: {},
 *    inputContainerStyle: {}
 *    height: Number,
 *    extraOptions: {}
 *  }
 * }
 * @returns
 */

const Label = styled.div`
  // display: flex;
  align-items: center;
  position: relative;
`
const InputForm = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem;
`
const IconContainer = styled.span`
  position: absolute;
  left: -1px;
`

function Input({
  type,
  value = "",
  onChange,
  label,
  errorMessage,
  icon,
  extraOptions,
  name,
  placeholder,
  extraClasse
}) {
  return (
    <Label>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <IconContainer>
        {icon && (
          <icon.name
            color={icon?.color ?? "gray"}
            style={{ marginLeft: 12 }}
            size={icon?.size ?? 20}
          />
        )}
      </IconContainer>
      <InputForm
        className={twMerge(["border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block min-w-max", extraClasse])}
        placeholder={placeholder}
        type={type ?? "text"}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        {...extraOptions}
      />
      {errorMessage && (
        <div style={{ marginTop: 10, fontSize: 13, color: "red" }}>
          Veuillez remplir toute les input
        </div>
      )}
    </Label>
  );
}

export default Input;
