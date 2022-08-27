import React from 'react';
import s from './Search.module.scss';
import { setSearch, setSearchValue } from '../../redux/slices/searchSlice';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

const Search: React.FC =() => {
  const searchValue = useSelector(setSearch);
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState(searchValue);
  const onClickClose = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((e:React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(e.target.value));
      setValue(e.target.value);
    }, 500),
    [],
  );
  const onUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e);
    setValue(e.target.value);
  };
  return (
    <div className={s.body}>
      <svg
        className={s.searchIcon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        className={s.input}
        type="text"
        onChange={(e) => onUpdateValue(e)}
        value={value}
      />
      {value && (
        <svg
          onClick={() => onClickClose()}
          className={s.closeIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
