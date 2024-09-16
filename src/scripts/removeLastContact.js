// import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contacts = await readContacts();

  const newArr = contacts.slice(1, contacts.length - 1);

  await writeContacts(newArr);
};

removeLastContact();
