import React, { useState } from 'react';
import MainDrawerNavigator from './navigation/mainDrawerNavigator';

export default function App() {
  const [functionData, setFunctionData] = useState(''); //Function data is 'global'. Why? Because all scenes are based on it. It may make sense to use context tho but not yet...
  const functionDataHandler = (data) => {
    setFunctionData(data);
  };

  return (
    <MainDrawerNavigator
      functionDataHandler={functionDataHandler}
      functionData={functionData}
    ></MainDrawerNavigator>
  );
}
