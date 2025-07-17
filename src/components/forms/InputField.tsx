import { motion } from "framer-motion";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = ({ label, ...props }: InputProps & { label: string }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block mb-1 font-semibold text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    />
  </motion.div>
);
