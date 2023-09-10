'use client'
import MainNav from '@/components/MainNav';
import Footer from '@/components/Footer';
import Animate from '@/components/Animate';

const Client = ({ children }: { children: React.ReactNode }) => {


  return (
    <>  
        <Animate delay={0} onviewport={false}>
          <MainNav />
        </Animate>
        {children}
        <Animate direction='b-t'>
          <Footer />
        </Animate>
    </>
  );
};

export default Client;
