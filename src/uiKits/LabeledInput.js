import React from 'react'
export function LabeledInput({ label, value, onChange }) {
  return (
    <p>
      <label>
        {label}
        <input type="text" onChange={onChange} value={value} />
      </label>
    </p>
  )
}
