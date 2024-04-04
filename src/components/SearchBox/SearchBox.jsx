import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const search = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label htmlFor={search} className={css.label}>
        Find contact by name:
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        id={search}
      />
    </div>
  );
}
