
import './App.css';
import Books from './components/Books';
import NewBook from './components/NewBook';

function App() {
  return (
    <div className="App">
      {/* component that is responsible for rendering a form or UI related to adding a new book. */}
      <NewBook/>

      {/* component that is responsible for rendering a list or UI related to displaying books. */}
      <Books/>
    </div>
  );
}

export default App;
