const { listContacts, getContactById, removeContact, addContact, updateById } = require('../contacts');
const { httpError } = require('../helpers');
const { ctrlWrapper } = require('../helpers');

const getAll = async (req, res) => {
  res.json(await listContacts());
};

const getById = async (req, res) => {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (!contact) {
      throw httpError(404, 'Not found');
    }
    res.json(contact);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const contact = await removeContact(id);
  if (!contact) {
    throw httpError(404, 'Not found');
  }
  res.json(contact);
};

const add = async (req, res) => {
    res.status(201).json(await addContact(req.body));
};

const update = async (req, res) => {
    const { id } = req.params;
    const contact = await updateById(id, req.body);
    if (!contact) {
      throw httpError(404, 'Not found');
    }
    res.json(contact);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  remove: ctrlWrapper(remove),
  add: ctrlWrapper(add),
  update: ctrlWrapper(update),
};
