import { FC, useEffect, useState } from 'react';

const StoragePage: FC = () => {
  const isClient = typeof window !== 'undefined';
  const [storage, setStorage] = useState<Storage | null>(null);
  const [sesStorage, setSesStorage] = useState<Storage | null>(null);
  const [db, setDb] = useState<IDBOpenDBRequest>();

  useEffect(() => {
    // console.log('aa');
    if (isClient) {
      setStorage(localStorage);
      setSesStorage(sessionStorage);
    }
  }, [isClient]);

  useEffect(() => {
    if (db) return;
    console.log(db);
  }, []);

  function setLocalStorage(name: string) {
    localStorage.setItem('name', name);
    sessionStorage.setItem('name', name);
  }

  useEffect(() => {
    if (!db) return;
    // const transition = db.transaction(['customers'], 'readwrite');
    // console.log(transition);
    void onUpgraded(db);
  }, [db]);

  function onUpgraded(db: IDBOpenDBRequest) {
    const customerData = [
      { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
      { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
    ];

    // db.onupgradeneeded = () => {
    //   console.log('aa');
    //   const objectStore = db.result.createObjectStore('customer', {
    //     keyPath: 'ssn',
    //   });
    //   objectStore.createIndex('name', 'name', { unique: false });
    //   objectStore.createIndex('email', 'email', { unique: true });
    //
    //   objectStore.transaction.oncomplete = function (event) {
    //     const customerObjectStore = db.result
    //       .transaction('customers', 'readwrite')
    //       .objectStore('customers');
    //     customerData.forEach(function (customer) {
    //       customerObjectStore.add(customer);
    //     });
    //   };
    // };
  }

  function setData() {
    if (!db) return;

    const customerData = [
      { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
      { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
    ];
    console.log(db);
    console.log(db.result);
    // db.result
    //   .transaction('customers', 'readwrite')
    //   .objectStore('customers')
    //   .add({
    //     ssn: '444-44-4444',
    //     name: 'Bill',
    //     age: 35,
    //     email: 'bill@company.com',
    //   });

    const store = db.result.transaction('customers').objectStore('customers');
    console.log(store);
  }

  function getData() {
    // if (!db) return;
    // const store = db.result
    //   .transaction('customers')
    //   .objectStore('customers');
    // console.log(store);
    // db.result
    //   .transaction('customers')
    //   .objectStore('customers')
    //   .get('444-44-4444').onsuccess = function (event) {
    //   console.log('aa');
    //   alert('Name for SSN 444-44-4444 is ' + event.target.result.name);
    // };
  }
  const [version, setVersion] = useState<number>(3);
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
      <div>{JSON.stringify(db)}</div>
      <button
        onClick={() => {
          setVersion((prevState) => prevState++);
          void database(version);
        }}
      >
        db
      </button>
    </div>
  );
};

export default StoragePage;

function database(version: number) {
  const request = indexedDB.open('myTestDatabase', version);

  request.onupgradeneeded = (e) => {
    console.log('upgrade', 'e');
    // const objectStore = request.result.createObjectStore('customer', {
    //   keyPath: 'ssn',
    // });
    // objectStore.createIndex('name', 'name', { unique: false });
    // objectStore.createIndex('email', 'email', { unique: true });
    // console.log(objectStore);
  };

  request.onerror = (e) => {
    console.log('error', e);
  };

  request.onsuccess = async (e) => {
    console.log('success', e);
    const objectStore = (e.target as IDBOpenDBRequest)?.result
      .transaction(['customer'], 'readwrite')
      .objectStore('customer');
    // objectStore.createIndex('name', 'name', { unique: false });
    // objectStore.createIndex('email', 'email', { unique: true });
    console.log(objectStore);
    const req = objectStore.get('1');
    req.onsuccess = (e) => {
      console.log(e);
    };
  };
}
