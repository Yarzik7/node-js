const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => console.log('Server running!'));

// const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
// const { program } = require('commander');

// program
//   .option('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse();

// const argv = program.opts();

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       const contacts = await listContacts();
//       return console.table(contacts);

//     case 'get':
//       const contact = await getContactById(id);
//       return console.log(contact);

//     case 'add':
//       const newContact = await addContact({name, email, phone});
//       return console.log(newContact);

//     case 'remove':
//       const removedContact = await removeContact(id);
//       return console.log(removedContact);

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);
