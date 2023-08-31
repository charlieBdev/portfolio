import React from 'react'

interface ButtonProps {
    btnText: string;
}

const Button: React.FC<ButtonProps> = ({ btnText }) => {

  return (
    <button
        className="text-center border border-6 border-cyan-400 py-2 px-4 mb-2 rounded-full shadow hover:shadow-lg"
        type="submit"
    >
        {btnText}
    </button>
  )
}

export default Button