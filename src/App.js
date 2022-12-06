import './App.scss'
import Home from './pages/home/Home';
import NavBar from './components/Layout/Navbar';
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import About from './pages/about/About';
import Dashboard from './pages/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  return (
//     <ThemeProvider
//   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
//   minBreakpoint="xxs"
// >
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}  />
        <Route path="/projects" element={<Projects/>} />  
        <Route path="/about" element={<About/>} /> 
        <Route path="/Dashboard" element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
