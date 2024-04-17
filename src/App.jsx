import { Route } from "react-router-dom";
import ToDoList from './screens/ToDoList';

function App() {
  return (
    <Route path="/" element={<ToDoList />} />
  );
}

export default App
