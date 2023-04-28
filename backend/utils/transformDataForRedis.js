const { productKeys } = require('../dictionary/productKeys');
const { getMonth } = require('./getMonth');
const { fabricKeys } = require('../dictionary/fabricKeys');

function generateInitialRecords() {
  return fabricKeys.reduce((data, fabric) => {
    data[fabric.id] = {
      data: [],
      label: fabric.label,
    };
    return data;
  }, {});
}

function fillRecords(initData, data) {
  return data.reduce((obj, record) => {
    const date = record[productKeys.date];
    const month = getMonth(date);
    if (!month) return obj;

    const factoryId = record[productKeys.factory_id];
    const product1 = Number(record[productKeys.product1]) / 1000;
    const product2 = Number(record[productKeys.product2]) / 1000;
    const product3 = Number(record[productKeys.product3]) / 1000;

    if (!obj[factoryId].data[month - 1]) obj[factoryId].data[month - 1] = {};

    const {
      product1: baseProduct1 = 0,
      product2: baseProduct2 = 0,
      product3: baseProduct3 = 0,
      all: baseAll = 0,        
    } = obj[factoryId].data[month - 1];

    obj[factoryId].data[month - 1].product1 = baseProduct1 + product1;
    obj[factoryId].data[month - 1].product2 = baseProduct2 + product2;
    obj[factoryId].data[month - 1].product3 = baseProduct3 + product3;
    obj[factoryId].data[month - 1].all = baseAll + product1 + product2 + product3;

    return obj;
  }, initData)
}

function transformDataForRedis(data) {
  const initData = generateInitialRecords();

  return fillRecords(initData, data);
}

module.exports = { transformDataForRedis };