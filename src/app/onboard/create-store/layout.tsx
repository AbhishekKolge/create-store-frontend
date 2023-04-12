import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { CreateStoreProps } from './CreateStoreTypes';
import styles from './CreateStore.module.css';

const CreateStoreLayout: React.ComponentType<CreateStoreProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.createStoreMain}>{children}</main>
      <Footer />
    </>
  );
};

export default CreateStoreLayout;
