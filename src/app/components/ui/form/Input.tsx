import { forwardRef } from 'react';
import { InputProps, InputRef } from './FormTypes';
import styles from './Input.module.css';

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    label,
    helperText,
    errorText,
    inputProps,
    invalid,
    className,
    leftEl,
    rightEl,
  } = props;
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <label
        htmlFor={inputProps?.id}
        className={`${styles.label} ${invalid ? 'invalid' : ''} ${
          inputProps?.required ? 'required' : ''
        }`}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {leftEl && leftEl}
        <input
          ref={ref}
          {...inputProps}
          className={`${styles.input} ${invalid ? 'invalid' : ''}`}
        />
        {rightEl && rightEl}
      </div>
      {helperText && <span className={styles.helperText}>{helperText}</span>}
      {errorText && <span className={styles.errorText}>{errorText}</span>}
    </div>
  );
});

export default Input;
