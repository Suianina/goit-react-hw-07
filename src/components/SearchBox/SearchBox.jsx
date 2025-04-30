import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;