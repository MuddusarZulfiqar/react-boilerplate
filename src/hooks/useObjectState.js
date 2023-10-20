import { useState } from "react";

function useObjectState(initialObject) {
  const [object, setObject] = useState(initialObject);

  const updateObject = (key, value) => {
    setObject({ ...object, [key]: value });
  };

  return {
    object,
    updateObject,
  };
}

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
