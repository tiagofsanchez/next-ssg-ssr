import "../styles/globals.css";
import { ApolloProvider } from '@apollo/client';
import anotherClient from '../another-apollo-client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={anotherClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
