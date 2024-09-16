import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = {
    id: 11,
    name: 'Julianne',
    email: 'jbraleya@wikimedia.org',
    phone: '104-690-8720',
    job: 'Senior Financial Analyst',
  };
  contacts.push(newContact);
  writeContacts(contacts);
};

addOneContact();
