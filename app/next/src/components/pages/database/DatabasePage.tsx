import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';

const DatabasePage: FC = () => {
  const isClient = typeof window !== 'undefined';
  const [db, setDb] = useState<IDBOpenDBRequest>();
  const [version, setVersion] = useState<number>(3);

  useEffect(() => {
    if (db) return;
    console.log(db);
  }, []);

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

  const [dataFromItem, setDataFromItem] = useState<any>(null);
  return (
    <div style={{ padding: 30 }}>
      <table>
        <tbody></tbody>
      </table>
      <div>{JSON.stringify(db)}</div>
      <Button
        onClick={() => {
          setVersion((prevState) => prevState++);
          void database(version);
        }}
      >
        open DB
      </Button>

      <Button
        onClick={() => {
          const request = indexedDB.open('myTestDatabase', version);
          request.onsuccess = (e) => {
            const objectStore = (e.target as IDBOpenDBRequest)?.result
              .transaction(['customer'], 'readwrite')
              .objectStore('customer');

            const result: IDBRequest = objectStore.get('1');
            result.onsuccess = (e) => {
              console.log(e.target.result);
              setDataFromItem(e.target.result);
            };
          };
        }}
      >
        GET ITEM
      </Button>
      <div>{JSON.stringify(dataFromItem)}</div>
    </div>
  );
};

export default DatabasePage;

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
