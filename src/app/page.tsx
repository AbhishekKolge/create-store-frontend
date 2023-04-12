'use client';
import OuterWrapper from './components/ui/layout/OuterWrapper';
import Button from './components/ui/form/Button';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const startDemoHandler = () => {
    router.push('/onboard/sign-in');
  };

  return (
    <section>
      <OuterWrapper className='demoContainer'>
        <h1>Unthread</h1>
        <Button onClick={startDemoHandler}>Start Demo</Button>
      </OuterWrapper>
    </section>
  );
};

export default HomePage;
