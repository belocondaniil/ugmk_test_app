function getFilteredArray(arr, filterKey) {
  return arr.map((el) => el.filterKey);
}

module.exports = { getFilteredArray };