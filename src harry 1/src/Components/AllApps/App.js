// import logo from './logo.svg';

let name = 'Anurag Mourya'; 
// or given inside the function...

const element = <h1>Hello, world!</h1>;//this is the jsx code it is not run a javascript..

function App() {
  let name = 'Anurag Mourya';
 
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Concact</li>
      </nav>

      <h3>{name}</h3>
      <h3>{element}</h3>

      <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta obcaecati, incidunt, vero eaque aspernatur necessitatibus numquam dignissimos mollitia cupiditate, rem eius. Vel molestias quam harum nobis suscipit laborum, recusandae voluptatibus. Rem, autem.</div>

      <div className="had">This is the frist heading</div>
    </>
  );
}

export default App;
