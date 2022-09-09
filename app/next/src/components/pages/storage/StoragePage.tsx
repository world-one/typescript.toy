import { FC, useEffect, useState } from 'react';

const StoragePage: FC = () => {
  const isClient = typeof window !== 'undefined';
  const [storage, setStorage] = useState<Storage | null>(null);
  const [sesStorage, setSesStorage] = useState<Storage | null>(null);

  useEffect(() => {
    console.log(JSON.stringify(localStorage, null, 2));
    console.log(sessionStorage);
    if (isClient) {
      setStorage(localStorage);
      setSesStorage(sessionStorage);
    }
  }, [isClient]);

  function setLocalStorage(name: string) {
    localStorage.setItem('name', name);
    sessionStorage.setItem('name', name);
    console.log(localStorage);
  }

  return (
    <div>
      <div>{JSON.stringify(storage, undefined, 2)}</div>
      <div>{JSON.stringify(sesStorage, undefined, 2)}</div>
      <button onClick={() => setLocalStorage('world-one')}>set name</button>
    </div>
  );
};

export default StoragePage;
