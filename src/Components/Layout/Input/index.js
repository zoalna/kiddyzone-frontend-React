import React from 'react'

const InputFeild = ({
  style,
  name,
  value,
  handleChange,
  type,
  className,
  required
}) => {
  return (
    <input
      style={style}
      name={name}
      value={value}
      onChange={handleChange}
      type={type}
      class={className}
      required={required}
    />
  )
}

export default InputFeild
