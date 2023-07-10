import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RestrictedPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);

    // Redirect to /marketplace if user is logged in and tries to access /login or /register
    if (user && (router.pathname === '/login' || router.pathname === '/register')) {
      router.push('/marketplace');
    }

    // Redirect to /login if user is not logged in and tries to access /profile
    if (!user && router.pathname === '/profile') {
      router.push('/login');
    }
  }, []);

  return null;
};

export default RestrictedPage;