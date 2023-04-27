function getMonth(date) {
  const [, mon] = date.split('/');

  return mon;
};

module.exports = { getMonth };
