import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import LoginContainer from "./components/login/container/LoginContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Dashboard navTabs={["Tournament", "Account"]} />}
            exact
            strict
          />
          <Route path='/login' element={<LoginContainer />} exact />
          {/* <Route path='/register' element={<Login />} exact /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
