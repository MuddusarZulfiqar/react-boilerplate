import { useState } from "react";

function useArrayState(initialArray) {
  const [array, setArray] = useState(initialArray);

  const addItem = (item) => {
    setArray([...array, item]);
  };

  const removeItem = (index) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  };

  return {
    array,
    addItem,
    removeItem,
  };
}

export default useArrayState;

/*
    How to use it?
    import useArrayState from './hooks/useArrayState';
    const { array, addItem, removeItem } = useArrayState([1, 2, 3]);

    <ul>
        {array.map((item, index) => (
            <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
            </li>
        ))}
    </ul>
*/
