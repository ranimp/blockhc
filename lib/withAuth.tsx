import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from './auth';

// eslint-disable-next-line func-names
const withAuth = (WrappedComponent) => function (props) {
  const { isLogged, redirect } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged && redirect.isRedirect) {
      router?.replace('/login');
    }
  }, []);

  return <WrappedComponent {...props} />;
};

export default withAuth;
