import { getFilterVal } from 'redux/filter/filter-selector';
export const getLoginName = state => state.contacts.loginName;

export const getLoginNumber = state => state.contacts.loginNumber;
export const getContacts = state => state.contacts.items;

export const findContactsByQuery = state => {
  const contacts = getContacts(state);
  const nameToFilter = getFilterVal(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameToFilter.toLowerCase())
  );
};
