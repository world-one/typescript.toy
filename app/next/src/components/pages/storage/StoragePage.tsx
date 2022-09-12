import { FC, useEffect, useState } from 'react';

const StoragePage: FC = () => {
  const isClient = typeof window !== 'undefined';
  const [storage, setStorage] = useState<Storage | null>(null);
  const [sesStorage, setSesStorage] = useState<Storage | null>(null);

  useEffect(() => {
    // console.log('aa');
    if (isClient) {
      setStorage(localStorage);
      setSesStorage(sessionStorage);
    }
  }, [isClient]);

  function setLocalStorage(name: string) {
    localStorage.setItem('name', name);
    sessionStorage.setItem('name', name);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>local : </th>
            <td>{storage?.getItem('name')}</td>
          </tr>
          <tr>
            <th>session : </th>
            <td>{sesStorage?.getItem('name')}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setLocalStorage('world-one')}>set name</button>
    </div>
  );
};

export default StoragePage;
