import { openDB } from 'idb';

const dbName = 'myDatabase';
const storeName = 'counterState';
const key = 'count';

const initDB = async () => {
  return openDB(dbName, 2, {
    upgrade(db) {
      // eslint-disable-next-line no-console
      console.log("%c db.objectStoreNames.contains(storeName)", "color: aqua", db.objectStoreNames.contains(storeName));

      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: key, autoIncrement: true });
      }
    },
    blocked(currentVersion, blockedVersion, event) {
      // eslint-disable-next-line no-console
      console.log("%c blocked", "color: aqua", currentVersion, blockedVersion, event);
    },
    blocking(currentVersion, blockedVersion, event) {
      // eslint-disable-next-line no-console
      console.log("%c blocking", "color: aqua", currentVersion, blockedVersion, event);
      // …
    },
    terminated() {
      // eslint-disable-next-line no-console
      console.log("%c terminated", "color: aqua");
      // …
    },
  });
};

export const getCounterState = async () => {
  const db = await initDB();
  // eslint-disable-next-line no-console
  console.log("%c db", "color: aqua", db);

  // const res = await db.get(storeName);

  const tx = db.transaction([storeName], "readonly");
  const store = tx.objectStore(storeName);
  const res = (await store.get(key)) || 0;
  await tx.done;

  // eslint-disable-next-line no-console
  console.log("%c db.getAll(storeName);", "color: aqua", res);


  return db.getAll(res);
};

export const updateCounterState = async (count: number) => {
  const db = await initDB();

  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.put(count, key);
  await tx.done;
};
