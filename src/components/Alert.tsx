"use client";
import React, { useEffect, useState } from "react";
import { AlertTitle, Alert as ShadAlert } from "./ui/alert";
import ErrorIcon from "./Icons/ErrorIcon";
import CloseIcon from "./Icons/CloseIcon";

type AlertProps = { title: string; onClose?: () => void };

const Alert = ({ title, onClose }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ShadAlert className="relative">
        <div className="flex items-start gap-2">
          <ErrorIcon className="h-4 w-4 mt-1" />
          <AlertTitle>{title}</AlertTitle>
        </div>
        <CloseIcon className="h-4 w-4" onClick={handleClose} />
      </ShadAlert>
    </div>
  );
};

export default Alert;
