export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectPendingState = state => state.contacts.isPending;
export const selectError = state => state.contacts.errorMessage;
