import { ApolloClient, InMemoryCache } from "@apollo/client";


const anotherClient = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default anotherClient;