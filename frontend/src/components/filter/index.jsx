import PropTypes from 'prop-types';

import styles from './filter.module.css';

const options = [
  {
    key: 'product1',
    label: 'Продукт 1',
  },
  {
    key: 'product2',
    label: 'Продукт 2',
  },
  {
    key: 'all',
    label: 'Все продукты',
  },
]

function Filter({ filterValue ,changeFilterValue }) {
  function changeSelect(event) {
    changeFilterValue(event.target.value);
 }

  return (
    <div className={styles.filterContainer}>
      <text>Фильтр по типу продукции</text>
      <select
        className={styles.filterSelect}
        value={filterValue}
        onChange={changeSelect}
      >
         {options.map(({ key, label }) => <option value={key} key={key}>{label}</option>)}
      </select>
    </div>
  )
}

Filter.propTypes = {
  changeFilterValue: PropTypes.func,
  filterValue: PropTypes.string,
}

export default Filter;