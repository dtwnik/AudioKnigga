import {Routes,Route} from "react-router-dom" 
// import DetailsPage from "./pages/DetailsPage";
// import TDetailsPage from "./pages/TDetailsPage";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import TicketPage from "./pages/TicketPage";
function App() {
  return (
          <div>
            <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/book/:id' element={<BookPage/>} />
            </Routes>
          </div>
        
  );
}

export default App;
