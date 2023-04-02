import { Home } from "./pages/home/Home";
import { Login } from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";
import { List } from "./pages/list/List";
import { Signup } from "./pages/signup/Signup";
import { AuthProvider } from "./components/contexts/AuthContext";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
