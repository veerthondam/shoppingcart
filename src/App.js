import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
/*Router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* components */
import Header from "./components/Header/Header";
import LoginForm from "./pages/LoginPage/LoginForm";
import SignupForm from "./pages/SignupPage/SignupForm";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
