import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Home, Login, Register, Profile, ProfileEdit, Post} from "./pages"
import "./Styles/app.scss";


function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/profile/:id/edit" element={<ProfileEdit />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
