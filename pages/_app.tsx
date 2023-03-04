import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../lib/auth';
import { ContractProvider } from '../lib/contractProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ContractProvider>
        <Component {...pageProps} />
      </ContractProvider>
    </AuthProvider>
  );
}
