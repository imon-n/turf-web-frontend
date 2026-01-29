export default function Btn({ children }) {
  return (
    <button
      className="
        w-[150px] sm:w-[200px] md:w-[220px] h-[42px] sm:h-[46px] md:h-[48px] bg-black rounded-md uppercase text-yellow-500 text-sm sm:text-base md:text-lg font-semibold text-center flex justify-center items-center px-4 cursor-pointer border border-yellow-200 transition duration-300 hover:bg-yellow-500 hover:text-black
      "
    >
      {children}
    </button>
  );
}
