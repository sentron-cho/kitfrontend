import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      Hello World!
      {/* title prop, name prop */}
      <MyComponent title="제 이름은" name="홍길동" />
    </div>
  );
}

export default App;
