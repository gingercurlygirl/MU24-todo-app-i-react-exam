import './App.css'
import Header from "./components/Header.tsx";
import Title from "./components/Title.tsx";
import ListTodo from "./components/ListTodo.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
      <div>
          <Header/>
          <hr/>
          <Title/>
          <ListTodo/>
          <Footer/>
      </div>
  )
}

export default App
