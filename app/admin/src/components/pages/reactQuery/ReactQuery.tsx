import { FC } from 'react';
import {QueryClient, useQuery, QueryClientProvider} from "@tanstack/react-query";

interface PropTypes {}

const queryClient = new QueryClient();

const ReactQuery: FC<PropTypes> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MyData />
    </QueryClientProvider>
  )
};

export default ReactQuery;

const MyData = () => {
  const { isLoading, error, data } = useQuery(['data'], async () => {
    const result = await fetch('https://api.github.com/repos/tannerlinsley/react-query');
    return result.json();
  })

  console.log(isLoading, error, data)
  if (isLoading) return <div>is loading</div>
  return <div>{JSON.stringify(data)}</div>
}