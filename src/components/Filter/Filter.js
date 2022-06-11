import styles from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterVal } from 'redux/filter/filter-selector';
import { updateFilter } from 'redux/filter/filter-actions';

export default function Filter() {
  const filterVal = useSelector(getFilterVal);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => dispatch(updateFilter(value));

  return (
    <>
      <div className={styles.filter}>
        <p className={styles.filter__title}>Find contacts by name</p>
        <input
          className={styles.filter__field}
          type="text"
          name="name"
          value={filterVal}
          placeholder="Enter the name..."
          onChange={handleChange}
        />
      </div>
    </>
  );
}
