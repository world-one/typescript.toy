import { FC, useEffect, useState } from 'react';

const StoragePage: FC = () => {
  const isClient = typeof window !== 'undefined';
  const [storage, setStorage] = useState<Storage | null>(null);
  const [sesStorage, setSesStorage] = useState<Storage | null>(null);
  const [db, setDb] = useState<IDBDatabase>();

  useEffect(() => {
    console.log(JSON.stringify(localStorage, null, 2));
    console.log(sessionStorage);
    if (isClient) {
      setStorage(localStorage);
      setSesStorage(sessionStorage);
    }
  }, [isClient]);

  useEffect(() => {
    void database(setDb);
  }, []);

  function setLocalStorage(name: string) {
    localStorage.setItem('name', name);
    sessionStorage.setItem('name', name);
    console.log(localStorage);
  }

  useEffect(() => {
    if (!db) return;
    const customerData = [
      { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
      { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
    ];
    // const transition = db.transaction(['customers'], 'readwrite');
    // console.log(transition);
    db.onupgradeneeded = () => {
      const objectStore = db.createObjectStore('customer', { keyPath: 'ssn' });
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });

      objectStore.transaction.oncomplete = function (event) {
        const customerObjectStore = db
          .transaction('customers', 'readwrite')
          .objectStore('customers');
        customerData.forEach(function (customer) {
          customerObjectStore.add(customer);
        });
      };
    };
  }, [db]);

  function getData() {
    if (!db) return;
    db
      .transaction('customers')
      .objectStore('customers')
      .get('444-44-4444').onsuccess = function (event) {
      alert('Name for SSN 444-44-4444 is ' + event.target.result.name);
    };
  }

  return (
    <div>
      <div>{JSON.stringify(storage, undefined, 2)}</div>
      <div>{JSON.stringify(sesStorage, undefined, 2)}</div>
      <button onClick={() => setLocalStorage('world-one')}>set name</button>

      <div>{JSON.stringify(db)}</div>
      <button onClick={() => getData()}>db</button>
    </div>
  );
};

export default StoragePage;

function database(setDb: any) {
  const request = indexedDB.open('myTestDatabase');
  request.onerror = (e) => {
    console.log('error', e);
  };

  request.onsuccess = async (e) => {
    console.log('success', e);
    setDb(request.result);
  };
}
