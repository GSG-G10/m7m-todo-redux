import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItems, endTask} from './redux/actions';
import {useState} from 'react';

function App() {
  const {list} = useSelector(state => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const localId = localStorage.getItem('id');
  const [id, setId] = useState(localId ? JSON.parse(localId): 0);
  return (
    <div className="App">
      <div className="list">
        {
        list.map(item =>
         <i style={{display: 'block'}}>
            <span style={{cursor: 'pointer', textDecoration: `${item.end ? 'line-through' : 'none'}`}} onClick={() => dispatch(endTask(item.id))}>
             {item.task}
            </span>
          </i>)}
      </div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={() => {
        if(!input)
          return;
        dispatch(addItem({id, task: input}));
        localStorage.setItem('id', id + 1);
        setId(id + 1);
        setInput('');
      }}>Add task</button>
      <button onClick={() => dispatch(removeItems())}>delete tasks</button>
    </div>
  );
}

export default App;
