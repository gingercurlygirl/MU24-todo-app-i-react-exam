import './style.css'
import Header from "./assets/Header.tsx";
import Title from "./assets/Title.tsx";
import ListTodo from "./assets/ListTodo.tsx";
import AddNewElement from "./assets/AddNewElement.tsx";
import AddButton from "./assets/AddButton.tsx";
import Footer from "./assets/Footer.tsx";

function App() {
  return (
      <div>
          <Header/>
          <hr/>
          <Title/>
          <ListTodo/>
          <AddNewElement/>
          <AddButton/>
          <Footer/>
      </div>
  )
}

export default App
