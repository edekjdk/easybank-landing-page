import { InfoItem } from './InfoItem';
import iconApi from '../../assets/images/iconApi.svg';
import iconBudgeting from '../../assets/images/iconBudgeting.svg';
import iconOnboarding from '../../assets/images/icononboarding.svg';
import iconOnline from '../../assets/images/iconOnline.svg';

const data = [
  {
    image: iconOnline,
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    image: iconBudgeting,
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    image: iconOnboarding,
    title: 'Fast Onboarding',
    text: '  We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    image: iconApi,
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

export const InfoSection = () => {
  return (
    <section>
      <header>
        <h2>Why choose Easybank</h2>
        <p>
          We levareage Open Banking to turn your bank account into your
          financial hub. Control your finances laike never before
        </p>
      </header>
      <section>
        <InfoItem></InfoItem>
      </section>
    </section>
  );
};
