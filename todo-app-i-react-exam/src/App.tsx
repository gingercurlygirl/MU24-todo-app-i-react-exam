import './App.css'
import Header from "./assets/Header.tsx";
import Title from "./assets/Title.tsx";
import ListTodo from "./assets/ListTodo.tsx";
import Footer from "./assets/Footer.tsx";

function App() {
  return (
      <div>
          <Header/>
          <hr/>
          <Title/>
          <ListTodo/>
          <hr/>
          <Footer/>
      </div>
  )
}

export default App
