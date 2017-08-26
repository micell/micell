import getQuery from './getQuery';

const getHashQuery = (name) => {
  const hash = window.location.hash;
  const index = hash.indexOf('?');
  const start = index > -1 ? index : 0;
  return getQuery(name, { query: hash.slice(start) });
};

export default getHashQuery;
