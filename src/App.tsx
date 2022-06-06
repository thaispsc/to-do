import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setTarefas] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        {/*Área de adicionar nova tarefa */}
         {list.map((item, index) => (
           <ListItem key={index} item={item}/>
         ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
