import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";

interface CheckboxCardProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

export const CheckboxCard = ({
  checked = false,
  label,
  onClick,
}: CheckboxCardProps) => {
  return (
    <div className="p-3 lg:p-2 bg-white rounded-md flex w-full justify-between items-center">
      <div className="flex items-center gap-3 overflow-hidden">
        <Checkbox checked={checked} onClick={() => onClick()} />
        <p className="text-gray-700 text-2xl truncate pr-3">{label}</p>
      </div>
      <div className="size-8 flex justify-center items-center hover:cursor-pointer">
        <Trash2 className="size-4 text-gray-500" />
      </div>
    </div>
  );
};
