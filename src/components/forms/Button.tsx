export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold transition duration-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);
