import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';

export default function PrivacyPolicyRoute() {
  return (
    <>
      <Header compact />
      <main>
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </>
  );
}
