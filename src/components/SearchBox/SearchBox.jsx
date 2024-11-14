import { useDispatch, useSelector } from "react-redux";
import { onFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox() {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilter);

  const onFilterValue = (e) => 
  //   {
  //    const action = onFilter(e.target.value);
  //       dispatch(action);
    
  // }
  dispatch(onFilter(e.target.value));
  return (
    <div className={css.input}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.filterInput}
        value={filteredContacts}
        onChange={onFilterValue}
      />
    </div>
  );
}
