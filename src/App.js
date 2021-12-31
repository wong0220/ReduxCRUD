import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import {add , remove, renew} from './modules/todos'
function App() {

const initState = useSelector(state =>state)


const dispatch = useDispatch()

const [text, setText] = useState('')
const [update, setUpdate] = useState('')
const [updateText ,  setUpdateText] = useState('')


  const onChange = (event) =>{
    setText(event.target.value)
  }

  const onSubmit = (event,text) => {
    event.preventDefault();
    dispatch(add(text))
    setText('')
  }
  

  const onClick = (event) => {
    dispatch(remove(event.target.parentNode.id))
  }

  const onUpdate = (event) => {
    setUpdate(parseInt(event.target.parentNode.id))
  }

  const onEdit = (event) => {
    setUpdateText(event.target.value)
  }

  const updateComplete = () =>{
    dispatch(renew({update,updateText}))
    // dispatch(renew({updates:update,updateTexts:updateText}))
    setUpdate('')
    setUpdateText('')
    
  }


  return (
    <div>
      {/* <form onSubmit={(event) => onSubmit(event,text)}> */}
      <form onSubmit={(event) => onSubmit(event,text)}>
        <input type='text' value = {text} onChange={onChange} />
        <button>클릭</button>
      </form>

      {initState.length > 0 &&
      <ul>
        {initState.map(todo => update === todo.id ? <div key = {todo.id}>
                  <input type='text' value = {updateText} onChange={onEdit}/> <button onClick={updateComplete}>수정완료</button>
                  </div>: 
          <li key = {todo.id} id={todo.id}> 
            {todo.text}
            <button onClick={onClick}>삭제</button>
            <button onClick={onUpdate}>수정</button>
          </li>
        )}
      </ul>
}


    </div>
  );
}

export default App;
