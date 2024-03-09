import React, { useState } from 'react'

interface FormInputProps {
  placeholder: string
  name: string
  value: string
  label: string
  type: string
  errorMsg?: string
  required?: boolean
  pattern?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({
  placeholder,
  name,
  value,
  label,
  type,
  errorMsg = '',
  onChange,
  required = false,
  pattern,
}: FormInputProps) {
  const [focused, setFocused] = useState(false)
  const showError = errorMsg && value.trim() === ''

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused ? 'true' : undefined}
      />
      {showError && <span style={{ color: 'red' }}>{errorMsg}</span>}
    </div>
  )
}
