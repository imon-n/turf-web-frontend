export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-2xl font-bold tracking-wide">
      <img
        src="/logo1.png" 
        alt="TurfCast logo"
        className="w-12 h-16 object-contain text-white"
      />
      <span>
        <span className="text-yellow-400">Turf</span>Cast
      </span>
    </div>
  );
}
