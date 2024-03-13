import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
    label: ReactNode;
 }
 