import clsx from "clsx";

type FieldWrapperProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
};

export type FieldWrapperPassTroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

const FieldWrapper = ({ children, label, className }: FieldWrapperProps) => {
  return (
    <div>
      <label
        className={clsx("block text-base font-medium text-gray-700", className)}
      >
        {label}
        <div className="mt-1">{children}</div>
      </label>
    </div>
  );
};

export default FieldWrapper;
