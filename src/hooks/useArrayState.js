/**
 * This module exports a custom React hook for managing array state.
 *
 * @module useArrayState
 * @file This file is part of the `hooks` directory and contains a custom hook for managing array state in a React application.
 */

import {useState} from "react";

/**
 * `useArrayState` is a custom React hook that provides a convenient way to manage array state.
 * It initializes the state with the provided initial array and provides functions to add and remove items from the array.
 *
 * @param {Array} initialArray - The initial state of the array.
 * @returns {Object} An object containing the current state of the array and functions to add and remove items.
 */
function useArrayState(initialArray) {
  const [array, setArray] = useState(initialArray);

  /**
   * `addItem` is a function that adds an item to the end of the array.
   *
   * @param {*} item - The item to add to the array.
   */
  const addItem = (item) => {
    setArray([...array, item]);
  };

  /**
   * `removeItem` is a function that removes an item from the array at a specific index.
   *
   * @param {number} index - The index of the item to remove from the array.
   */
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

/**
 * The `useArrayState` hook is exported for use in other parts of the application.
 */
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