
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={`px-6 py-3 rounded-md bg-blue-600 text-white font-medium transition hover:bg-blue-700 ${props.className}`}
  />
);
