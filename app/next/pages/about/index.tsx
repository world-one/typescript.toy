import type { NextPage } from 'next';
import globalStore from '../../src/stores/GlobalStore';

const Main: NextPage = () => {
  return <div>{globalStore.num}</div>;
};

export default Main;
