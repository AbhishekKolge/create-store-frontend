import styles from './StoreSkelton.module.css';
import Image from 'next/image';

const StoreSkelton = ({ storeName }: { storeName: string }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.frame} ${storeName && styles.scale}`}>
        <div className={styles.header}>
          <h4>{storeName ? storeName : 'Store Name'}</h4>
          <ul className={styles.links}>
            <li>Home</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.section}>
          <Image
            src='/assets/images/place-holder.png'
            alt='place holder'
            width={200}
            height={200}
          />
        </div>
        <div className={styles.secondarySection}>
          <h6>Categories</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
            eget adipiscing faucibus platea.
          </p>
          <div className={styles.imageList}>
            <div className={styles.imageHolder}></div>
            <div className={styles.imageHolder}></div>
            <div className={styles.imageHolder}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSkelton;
