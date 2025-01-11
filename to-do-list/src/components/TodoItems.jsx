import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import not_tick from './Assets/not_tick.png';


const TodoItems = ({no, display, text, setTodos}) => {
  
  const deleteTodo = (no) => {
  let data = JSON.parse(localStorage.getItem("todos"));
   data = data.filter((todo) => todo.no!==no);
   setTodos(data); 
  }
const toggle = (no) => {
  let data = JSON.parse(localStorage.getItem("todos"));
  const updatedData = data.map((item) => {
    if (item.no === no) {
      return {
        ...item,
        display: item.display === "" ? "line-through" : "",
      };
    }
    return item;
  });
  
  setTodos(updatedData);
  localStorage.setItem("todos", JSON.stringify(updatedData));
};

  
  return  (
    <div className="todoitems">
      <div className={`toditems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display === ""?<img src={not_tick}/>:  <img src={tick}/>}

        <div className="todoitems-text">{text}</div>
      </div>
      <img src={cross} alt="" className="cross-icon" onClick={() => deleteTodo(no)}  />
    </div>
  )
  
}

export default TodoItems
