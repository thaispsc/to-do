import * as C from './App.styles';
// da no mesmo de inmportar {Container} from './App.styles';


const App = () => {
  return(
      <C.Container>
          <C.Area>
            <C.Header>
              Lista de tarefas
            </C.Header>
          </C.Area>
      </C.Container>
  );
}

export default App;