export default function ChevronIcon (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 11 18"
      { ...props }
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.07 17.472a1.88 1.88 0 0 1-.487-1.274c0-.478.175-.936.488-1.274l5.488-5.935-5.488-5.935a1.883 1.883 0 0 1-.468-1.267c.004-.473.179-.925.488-1.26A1.607 1.607 0 0 1 2.255 0c.437-.004.858.178 1.172.506l6.668 7.209c.312.338.487.796.487 1.274s-.175.936-.488 1.274l-6.667 7.21A1.606 1.606 0 0 1 2.25 18c-.442 0-.866-.19-1.178-.528Z" 
        fill="currentColor"
      />
    </svg>
  )
}
