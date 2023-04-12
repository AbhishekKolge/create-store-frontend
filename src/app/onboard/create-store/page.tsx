'use client';
import StoreInfo from '@/app/components/create-store/StoreInfo';
import OuterWrapper from '@/app/components/ui/layout/OuterWrapper';
import styles from './CreateStore.module.css';
import Image from 'next/image';
import Button from '@/app/components/ui/form/Button';
import StoreSkelton from '@/app/components/create-store/StoreSkelton';
import IndustryInfo from '@/app/components/create-store/IndustryInfo';
import Loader from '@/app/components/loader/Loader';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateStorePage = () => {
  const router = useRouter();
  const [storeName, setStoreName] = useState('');
  const [selectIndustry, setSelectIndustry] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/onboard/sign-in');
    }, 3000);
  };

  const addStoreNameHandler = () => {
    setSelectIndustry(true);
  };

  const backHandler = () => {
    setSelectIndustry(false);
  };

  return (
    <>
      <section>
        <OuterWrapper className={styles.wrapperContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.container}>
                <span className={styles.slideCount}>
                  <span className={styles.activeSlide}>01</span> / 04
                </span>
                {!selectIndustry ? (
                  <StoreInfo
                    storeName={storeName}
                    setStoreName={setStoreName}
                  />
                ) : (
                  <IndustryInfo />
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button onClick={backHandler} className={styles.backBtn}>
                  <Image
                    src='/assets/icons/back-button.svg'
                    alt='back button'
                    width={50}
                    height={50}
                  />
                </button>
                {selectIndustry ? (
                  <Button onClick={submitHandler}>Create Store</Button>
                ) : (
                  <Button onClick={addStoreNameHandler}>Continue</Button>
                )}
              </div>
            </div>
            {!selectIndustry ? (
              <StoreSkelton storeName={storeName} />
            ) : (
              <div className={styles.industryImageContainer}>
                <Image
                  src='/assets/images/Industry.png'
                  alt='industry cover'
                  width={600}
                  height={600}
                />
              </div>
            )}
          </div>
        </OuterWrapper>
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default CreateStorePage;
