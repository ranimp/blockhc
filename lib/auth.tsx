import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState(null);
  const [redirect, setRedirect] = useState({
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

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLogged,
        redirect,
        address,
        handleLogin,
        handleLogout,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
