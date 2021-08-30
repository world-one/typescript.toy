import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const Apollo = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* <ExchangeRates /> */}
      <Books />
    </div>
    </ApolloProvider>
  );
}

export default Apollo;

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const BOOKS_QUERY = gql`
  query Books {
    books {
      title,
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  console.log({
    loading, error, data
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }: any, index: number) => (
    <div key={index}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    

  return data.rates.map(({ currency, rate }: any) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}