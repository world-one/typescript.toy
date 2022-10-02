import { FC, useState } from 'react';
import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from '@tanstack/react-query';
import Button from '@mui/material/Button';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const ReactQuery: FC = () => {
  console.log('fe');
  return (
    <QueryClientProvider client={queryClient}>
      <MyData />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQuery;

const MyData = () => {
  const [key, setKey] = useState('red');
  const { isLoading, error, data } = useQuery(
    ['data', key],
    async () => {
      const result = await fetch(
        'https://api.github.com/repos/tannerlinsley/react-query'
      );
      return result.json();
    },
    {
      staleTime: 6000,
    }
  );

  console.log(isLoading, error, data);

  if (isLoading) return <div>is loading</div>;
  return (
    <>
      <div>
        <span> {key}</span>
      </div>
      <Button onClick={() => setKey('red')}>red</Button>
      <Button onClick={() => setKey('blue')}>blue</Button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};
