import React from 'react'

interface FormInputProps {
  placeholder: string
  name: string
  value: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({
  placeholder,
  name,
  value,
  label,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
