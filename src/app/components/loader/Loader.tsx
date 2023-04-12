import Lottie from 'react-lottie';
import loader from '../../../../public/assets/animation/loader.json';
import styles from './Loader.module.css';
import OuterWrapper from '../ui/layout/OuterWrapper';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <OuterWrapper className={styles.loaderContainer}>
      <Lottie options={defaultOptions} />
      <h3>Fetching Data</h3>
      <div className={styles.info}>
        <span>Do you know?</span>
        <span>
          After Covid 19, Total Sales of International Website have been
          increased to 50%
        </span>
      </div>
    </OuterWrapper>
  );
};

export default Loader;
