type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({ label, ...props }: InputProps & { label: string }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      {...props}
      className="w-full p-3 border rounded-md focus:ring-2 ring-blue-500 outline-none"
    />
  </div>
);
