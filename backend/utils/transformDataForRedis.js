const { productKeys } = require('../dictionary/productKeys');
const { getMonth } = require('./getMonth');
const { fabricKeys } = require('../dictionary/fabricKeys');

function transformDataForRedis(data) {
  const initData = fabricKeys.reduce((data, fabric) => {
    data[fabric.id] = {
      data: [],
      label: fabric.label,
    };
    return data;
  }, {});

  const transformedData = data.reduce((obj, key) => {
    const month = getMonth(key[productKeys.date]);
    if (!month) return obj;
    
    const factoryId = key[productKeys.factory_id];
    const productSum = key[productKeys.product1] + key[productKeys.product2] + key[productKeys.product3];

    if (obj[factoryId].data[month - 1]) {
      obj[factoryId].data[month - 1].product1 += Number(key[productKeys.product1]);
      obj[factoryId].data[month - 1].product2 += Number(key[productKeys.product1]);
      obj[factoryId].data[month - 1].product3 += Number(key[productKeys.product1]);
      obj[factoryId].data[month - 1].productSum += Number(productSum);

      return obj;
    }

    obj[factoryId].data[month - 1] = {
      product1: Number(key[productKeys.product1]),
      product2: Number(key[productKeys.product1]),
      product3: Number(key[productKeys.product1]),
      productSum: Number(productSum),
    }

    return obj;
  }, initData)

  return transformedData;
};

module.exports = { transformDataForRedis };