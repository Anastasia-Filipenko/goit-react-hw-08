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
    <input
      className={css.input}
      placeholder="Find contact by name:"
      type="text"
      value={filter}
      onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      id={search}
    />
  );
}
