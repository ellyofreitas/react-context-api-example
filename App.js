import React, { useContext } from 'react';

import Context from './Contexts/user';

import UserContainer from './Components/UserContainer';

export default function App(){
  const user = useContext(Context);
  return (
    <Context.Provider value={user}>
      <UserContainer/>
    </Context.Provider>
  );
}