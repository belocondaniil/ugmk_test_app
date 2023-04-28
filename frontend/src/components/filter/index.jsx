import PropTypes from 'prop-types';

import './styles.css';

function Filter({ filterValue ,changeFilterValue }) {
  function changeSelect() {
    changeFilterValue(event.target.value);
 }

  return (
    <div className='filter-container'>
      <text className='filter-text'>Фильтр по типу продукции</text>
      <select className='filter-select' value={filterValue} onChange={changeSelect}>
         <option value="product1">Продукт 1</option>
         <option value="product2">Продукт 2</option>
         <option value="product3">Продукт 3</option>
         <option value="all">Все продукты</option>
      </select>
    </div>
  )
}

Filter.propTypes = {
  changeFilterValue: PropTypes.func,
  filterValue: PropTypes.string,
}

export default Filter;