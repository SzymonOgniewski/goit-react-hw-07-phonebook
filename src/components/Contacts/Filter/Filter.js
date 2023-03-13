import { useDispatch } from 'react-redux';
import { changeFilterAction } from '../redux/filterSlice';
import css from './filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };
  return (
    <>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>

      <input
        className={css.input}
        onChange={changeFilter}
        autoComplete="off"
        type="text"
        name="filter"
        placeholder="search"
      />
    </>
  );
};
