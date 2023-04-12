import React from 'react';

export type InputProps = {
  label: string;
  helperText?: string | React.ReactNode;
  errorText?: string;
  inputProps: {
    id: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    name: string;
    placeholder?: string;
  };
  invalid: boolean;
  className?: string;
  leftEl?: React.ReactNode;
  rightEl?: React.ReactNode;
};

export type SelectProps = { src: string; value: string };

export type InputRef = HTMLInputElement;

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
};

export type InputSecondaryProps = {
  helperText?: string | React.ReactNode;
  helperTextSecondary?: string | React.ReactNode;
  helperTextTertiary?: string | React.ReactNode;
  errorText?: string;
  inputProps: {
    id: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    name: string;
    placeholder?: string;
  };
  invalid: boolean;
  className?: string;
  showIcon?: boolean;
};
