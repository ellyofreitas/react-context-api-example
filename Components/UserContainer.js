import Context from '../Contexts/user';

const ContainerUser = () => {
  return (
    <Context.Consumer>
      { props => (
        <h1> {props.name} </h1>
      ) }
    </Context.Consumer>
  );
}

export default ContainerUser;