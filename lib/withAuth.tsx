import { useRouter } from 'next/router';
import { useEffect } from 'react';

// eslint-disable-next-line func-names
const withAuth = (WrappedComponent) => function (props) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('address') === null) {
      router?.replace('/login');
    }
  }, []);

  return <WrappedComponent {...props} />;
};

export default withAuth;
