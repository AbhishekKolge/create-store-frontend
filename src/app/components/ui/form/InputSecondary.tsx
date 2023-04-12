import { forwardRef } from 'react';
import { InputSecondaryProps, InputRef } from './FormTypes';
import styles from './InputSecondary.module.css';
import Image from 'next/image';

const InputSecondary = forwardRef<InputRef, InputSecondaryProps>(
  (props, ref) => {
    const {
      helperText,
      helperTextSecondary,
      helperTextTertiary,
      errorText,
      inputProps,
      invalid,
      className,
      showIcon,
    } = props;
    return (
      <div className={`${styles.inputContainer} ${className}`}>
        <div className={styles.inputWrapper}>
          {showIcon &&
            (!invalid ? (
              <Image
                src='/assets/icons/checkbox.svg'
                alt='success icon'
                width={15}
                height={15}
                className={styles.inputIcon}
              />
            ) : (
              <Image
                src='/assets/icons/error.svg'
                alt='error icon'
                width={15}
                height={15}
                className={styles.inputIcon}
              />
            ))}
          {helperTextTertiary && (
            <span className={styles.tertiaryHelper}>{helperTextTertiary}</span>
          )}
          <input
            ref={ref}
            {...inputProps}
            className={`${styles.input} ${invalid ? 'invalid' : ''} ${
              showIcon ? styles.paddingLeft : ''
            }`}
          />
        </div>
        <div className={styles.inputInfoContainer}>
          <div>
            {helperTextSecondary && (
              <span className={styles.helperText}>{helperTextSecondary}</span>
            )}
            {errorText && <span className={styles.errorText}>{errorText}</span>}
          </div>
          {helperText && (
            <span className={styles.helperText}>{helperText}</span>
          )}
        </div>
      </div>
    );
  }
);

export default InputSecondary;
