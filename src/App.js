import "./assets/styles/App.css"

import Navbar from "./components/Navbar";
import Content from "./components/App-Content";
import SignUp from "./components/App-SignUp";
import Footer from "./components/Footer";

// {user, setUser}
function App() {
  return (
    <div className="App">
      <header className="App-Hero">
          <div className="Hero-Content">
            <Navbar/>
            
            <div className="Content-Container">
              <Content />
            </div>
          </div>
      </header>

      <SignUp/> {/* user={user} setUser={setUser} */}
      <Footer />

    </div>
  );
}

export default App;
