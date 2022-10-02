import React from 'react'

export interface ButtonProps {
  label: string
}
const teste = 'qwerty'

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button
