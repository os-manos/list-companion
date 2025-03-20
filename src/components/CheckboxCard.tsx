import React, { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";

interface CheckboxCardProps {
  checked: boolean;
  name: string;
}

export const CheckboxCard = ({ checked = false, name }: CheckboxCardProps) => {
  //TO DO: Refactor when tags configuration is complete
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  return (
    <div className="p-3 lg:p-2 bg-white rounded-md flex w-full justify-between items-center">
      <div className="flex items-center gap-3 overflow-hidden">
        <Checkbox
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <p className="text-gray-700 text-2xl truncate pr-3">{name}</p>
      </div>
      <div className="size-8 flex justify-center items-center hover:cursor-pointer">
        <Trash2 className="size-4 text-gray-500" />
      </div>
    </div>
  );
};
