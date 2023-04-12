import styles from './StoreInfo.module.css';
import InputSecondary from '../ui/form/InputSecondary';
import Link from 'next/link';

const StoreInfo = ({
  storeName,
  setStoreName,
}: {
  storeName: string;
  setStoreName: (value: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Name your Store</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
          eget adipiscing faucibus platea. Eu ultrices ipsum
        </p>
      </div>
      <InputSecondary
        helperText={
          <span>
            <span className={styles.light}>Not sure about the name,</span>{' '}
            <button>
              <span>Want us to suggest?</span>
            </button>
          </span>
        }
        inputProps={{
          id: 'storeName',
          required: true,
          value: storeName,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setStoreName(e.target.value);
          },
          name: 'storeName',
          placeholder: 'Ex. Ginny Cake Shop',
        }}
        invalid={false}
      />
      {storeName && (
        <InputSecondary
          helperText={
            <span>
              <button>
                <span>Generate unique domain</span>
              </button>
            </span>
          }
          inputProps={{
            id: 'domainName',
            required: true,
            name: 'domainName',
            placeholder: 'Enter domain name',
          }}
          invalid={false}
          helperTextSecondary={
            <span>
              <span className={styles.light}>
                This is temporary domain, you can add custom domain in settings
              </span>{' '}
              <Link className={styles.link} href='/'>
                Learn more
              </Link>
            </span>
          }
          helperTextTertiary='.company.com'
          showIcon={true}
        />
      )}
    </div>
  );
};

export default StoreInfo;
