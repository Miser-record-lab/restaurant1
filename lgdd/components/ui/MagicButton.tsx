import React from 'react'

const MagicButton = ({
    title,
    handleClick,
    otherClasses,
  }: {
    title: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
    return (
        <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-auto sm:w-auto" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C0C0C0_0%,#1a1a1a_50%,#C0C0C0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-4 gap-1.5 text-sm font-medium text-white backdrop-blur-3xl">
                {title}
            </span>
        </button>
    )
}

export default MagicButton