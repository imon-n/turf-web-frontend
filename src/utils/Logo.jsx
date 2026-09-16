import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo1.png"
        alt="TurfCast logo"
        className="h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-24 md:w-24"
      />
    </Link>
  );
}