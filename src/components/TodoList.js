import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

//componente como funcao
export const TodoList = ()=>{
    
    ///////////inicio- variaveis//////////////////////////////////
    //define objeto como constante
    const defaultListItems = [
        {name: 'Tarefa 1', isCompleted: true},
        {name: 'Tarefa 2', isCompleted: false},
        {name: 'Tarefa 3', isCompleted: false},
        {name: 'Tarefa 4', isCompleted: false}
    ];
    //altera itens, no caso altera estadod e componente
    const [items, setItems] = useState(defaultListItems);
    //altera taskValue, campo do input de novas entradas
    const [taskValue, setTaskValue] = useState('');
    ///////////fim - variaveis////////////////////////////////////

    //criando funcao interna
    const handleTaskSubmit = (event) => {
        //percorre a lista de itens e ver se tem algo igual ao inserido no momento
        if(items.find(i => i.name === taskValue)){
        event.preventDefault();
        return;
        }

        //matem o que já tem de item, e adiciona mais
        setItems([...items, { name: taskValue, isCompleted: false}]);

        //limpa campo input
        setTaskValue('');

        //evita recarregar pagina em submit
        event.preventDefault();
    }


    const handleOnTaskChanged = (event, item) => { 
        //console.log(event);
        setItems(items.map(i => {
            
            if(i.name === item.name){
                return{                  
                    ...i,
                    isCompleted: event.target.checked                
                }
            }

            return i;

        }))
    }

    return(
        <div className="todo-list-container">
            <p>Você concluiu um total de {items.filter(i => i.isCompleted).length} tarefas</p>
            <form onSubmit={handleTaskSubmit}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    value={taskValue}
                    onChange={(event) => setTaskValue(event.target.value)}
                />
                <button type="submit">Adicionar Tarefa</button>
            </form>
            <ul>
                {items.map((item) => <TodoListItem onTaskChanged={handleOnTaskChanged} item={item}/>)}
            </ul>
        </div>
    );
};