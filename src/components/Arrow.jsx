import React from 'react'

const AnimatedArrow = ({ direction = 'down', color = 'text-[#ccc] flex mx-auto', size = 'w-6 h-6' }) => {
  const rotationClass = {
    up: '-rotate-90',
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180'
  }[direction]

  return (
    <div className={`${size} ${color} animate-bounce`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`transform ${rotationClass}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  )
}

export default function Component() {
  return (
      <AnimatedArrow />
  )
}