import * as React from "react";

interface SpecificationItemProps {
  label: string;
  value: string;
}

export const SpecificationItem: React.FC<SpecificationItemProps> = ({
  label,
  value,
}) => {
  return (
    <div className="mb-12 max-md:mb-10">
      <dt className="text-base">{label}</dt>
      <dd className="mt-3 text-base">{value}</dd>
    </div>
  );
};
