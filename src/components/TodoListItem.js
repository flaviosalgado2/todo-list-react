export const TodoListItem = (props) => {
    return (
        <li>
            <input type="checkbox" checked={props.item.isCompleted}
            onChange={(event) => props.onTaskChanged(event, props.item)}/>
            {props.item.name}
        </li>
    );
}