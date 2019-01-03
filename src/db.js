import Dexie from 'dexie';

const db = new Dexie('EDWiretap');

db.version(1).stores({ messages: '++id' });

export default db;
