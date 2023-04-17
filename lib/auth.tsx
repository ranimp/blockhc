import React, {
  createContext, useState, useEffect, useMemo, ReactNode,
} from 'react';
import { ethers } from 'ethers';

type AuthContextType = {
  isLogged: any;
  redirect: { isRedirect: boolean; path: string };
  address: string | null;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  loginStatus: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<{ isRedirect: boolean; path: string }>({
    isRedirect: true,
    path: '/login',
  });

  const handleLogin = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const addressUser = await signer.getAddress();
      const network = await provider.getNetwork();
      if (network.name === 'maticmum') {
        setAddress(addressUser);
      } else {
        alert('Please change your network to Mumbai');
      }
    } else {
      alert('Please install MetaMask');
    }
  };

  const loginStatus = () => {
    if (localStorage.getItem('address') !== null) {
      setIsLogged(true);
      setRedirect({ isRedirect: false, path: '/login' });
    } else {
      setIsLogged(false);
      setRedirect({ isRedirect: true, path: '/login' });
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogout = async () => {
    await localStorage.removeItem('address');
    window.location.href = '/';
  };

  const authContextValues = useMemo(() => ({
    isLogged,
    redirect,
    address,
    handleLogin,
    handleLogout,
    loginStatus,
  }), [address, handleLogin, handleLogout, isLogged, loginStatus, redirect]);

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};
