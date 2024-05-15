/**
 * This module exports a custom React hook for managing object state.
 *
 * @module useObjectState
 * @file This file is part of the `hooks` directory and contains a custom hook for managing object state in a React application.
 */

import {useState} from "react";

/**
 * `useObjectState` is a custom React hook that provides a convenient way to manage object state.
 * It initializes the state with the provided initial object and provides a function to update the object.
 *
 * @param {Object} initialObject - The initial state of the object.
 * @returns {Object} An object containing the current state of the object and a function to update it.
 */
function useObjectState(initialObject) {
  const [object, setObject] = useState(initialObject);

  /**
   * `updateObject` is a function that updates a key-value pair in the object.
   *
   * @param {string} key - The key of the object to update.
   * @param {*} value - The new value for the key.
   */
  const updateObject = (key, value) => {
    setObject({ ...object, [key]: value });
  };

  return {
    object,
    updateObject,
  };
}

/**
 * The `useObjectState` hook is exported for use in other parts of the application.
 */
export default useObjectState;

/*
    How to use it?
    import useObjectState from './hooks/useObjectState';
    const { object, updateObject } = useObjectState({ name: 'John', age: 20 });

    <div>
        <p>Name: {object.name}</p>
        <p>Age: {object.age}</p>
        <button onClick={() => updateObject('name', 'Mary')}>Update Name</button>
        <button onClick={() => updateObject('age', 30)}>Update Age</button>
    </div>
*/