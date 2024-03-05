import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-rrclxvjfj62w.frontegg.com',
  clientId: 'e66a1a79-f3b9-4a10-b1e3-2086e34f8075'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);