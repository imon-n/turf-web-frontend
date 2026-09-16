export default function Btn({ children, className = "" }) {
  return (
    <button
      type="button"
      className={`
        w-[150px] sm:w-[200px] md:w-[220px]
        h-[42px] sm:h-[46px] md:h-[48px]
        px-4
        flex items-center justify-center
        rounded-md
        border border-yellow-400
        bg-yellow-500
        text-black
        text-sm sm:text-base md:text-lg
        font-semibold uppercase
        text-center
        cursor-pointer
        transition-all duration-300
        hover:bg-black
        hover:text-yellow-500
        hover:shadow-[0_0_20px_rgba(234,179,8,0.45)]
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-400
        focus:ring-offset-2
        focus:ring-offset-black
        ${className}
      `}
    >
      {children}
    </button>
  );
}