import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem('address') === null) {
        router?.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
