import React, { forwardRef } from "react";
import { useInput, InputProps } from "@nextui-org/react";

const styles = {
  mainWrapper: ["bg-[white]"],
  input: [
    "bg-[white]",
    "group[data-has-value=true] group-data-[has-value=true]:text-[#983027]",
  ],
  label: [
    "text-[#983027]",
    "group-data-[focus=true]:text-[#983027]",
    "text-xl",
    "group[data-filled-within=true] group-data-[filled-within=true]:text-[#983027]",
  ],
  inputWrapper: [
    "bg-[white]",
    "group-data-[focus=true]:bg-[white]",
    "group-data-[hover=true]:bg-[white]",
  ],
  innerWrapper: ["bg-[white]"],
};

const MyInput = forwardRef((props: InputProps, ref) => {
  const {
    Component,
    label,
    domRef,
    description,
    startContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    classNames: {
      ...styles,
    },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;

  const innerWrapper = React.useMemo(() => {
    return <input {...getInputProps()} />;
  }, [startContent, getInputProps, getInnerWrapperProps]);

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      <div {...getInputWrapperProps()}>
        {shouldLabelBeInside ? labelContent : null}
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
});

MyInput.displayName = "MyInput";

export default MyInput;
