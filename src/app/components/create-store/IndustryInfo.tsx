import styles from './IndustryInfo.module.css';
import Select from '../ui/form/Select';
import { useId } from 'react';

const IndustryInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Select Industry</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
          eget adipiscing faucibus platea. Eu ultrices ipsum
        </p>
      </div>
      <Select id={useId()} />
    </div>
  );
};

export default IndustryInfo;
