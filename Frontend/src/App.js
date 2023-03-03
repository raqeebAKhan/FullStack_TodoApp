import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;

