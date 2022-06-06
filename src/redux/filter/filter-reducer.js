import { createReducer } from '@reduxjs/toolkit';

import { updateFilter } from './filter-actions';

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

export default filter;
