import React from 'react'

interface ButtonProps {
    btnText: string;
}

const Button: React.FC<ButtonProps> = ({ btnText }) => {

  return (
    <button
        className="text-center mx-auto bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-500 font-medium py-2 px-4 mb-2 rounded w-full"
        type="submit"
    >
        {btnText}
    </button>
  )
}

export default Button