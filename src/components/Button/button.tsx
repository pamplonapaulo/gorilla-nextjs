import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  colorOne: string
  colorTwo: string
  disabled?: boolean
  isBlinking?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  parentCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  children,
  colorOne,
  colorTwo,
  disabled = false,
  isBlinking = false,
  type = 'button',
  parentCallback,
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (parentCallback) {
      parentCallback(e)
    }
  }

  return (
    <>
      <S.Btn
        theme={{
          primaryColor: colorOne,
          secondaryColor: colorTwo,
          isBlinking: isBlinking,
        }}
        disabled={disabled}
        type={type}
        onClick={(e) => handleClick(e)}
      >
        {children}
      </S.Btn>
    </>
  )
}

export default Button
