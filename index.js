import React, { useContext, Provider } from 'react';
import { render } from 'react-dom';

const Context = React.createContext({
  name: 'Ellyo',
  age: 19
});

const ContainerUser = () => {
  return (
    <Context.Consumer>
      { props => (
        <h1> {props.name} </h1>
      ) }
    </Context.Consumer>
  );
}

const App = () => {
  const user = useContext(Context);
  return (
    <Context.Provider value={user}>
      <ContainerUser/>
    </Context.Provider>
  );
}


render(<App />, document.getElementById('root'));
