import { Link } from "react-router-dom";

type AuthLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const AuthLink = ({ to, children }: AuthLinkProps) => (
  <Link
    to={to}
    className="w-full text-center block mt-4 text-gray-600  transition"
  >
    {children}
  </Link>
);
