import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import UseStateHook from './pages/1.hooks-use-state';
import PortalComp from './pages/10-portals';
import MouseContainer from './pages/2.mouse-container';
import UseEffectHook from './pages/2.UseEffectHook';
import ComponentD from './pages/3.context/ComponentD';
import ComponentE from './pages/3.context/ComponentE';
import UseReducerHooks from './pages/4-use-reducer';
import UseReducerHooksObj from './pages/4-use-reducer-obj';
import ParentComponent from './pages/5-use-callback/ParentComponent';
import UseMemoHooks from './pages/6-use-memo';
import UseRefHooks from './pages/7-use-ref';
import AppIndex from './pages/8-render-prop/AppIndex';
import CounterComponent from './pages/9-use-counter/CounterComponent';

export const UserContext = React.createContext()
export const LastNameContext = React.createContext()

function App() {
  return (
    <UserContext.Provider value="Ankit">
      <LastNameContext.Provider value="Yadav">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='1' />} />
            <Route path='1' element={<UseStateHook />} />
            <Route path='2' element={<MouseContainer />} />
            <Route path='3' element={<ComponentE />} />
            <Route path='4' element={<ComponentD />} />
            <Route path='5' element={<UseReducerHooks />} />
            <Route path='6' element={<UseReducerHooksObj />} />
            <Route path='7' element={<ParentComponent />} />
            <Route path='8' element={<UseMemoHooks />} />
            <Route path='9' element={<UseRefHooks />} />
            <Route path='10' element={<CounterComponent />} />
            <Route path='11' element={<AppIndex />} />
            <Route path='12' element={<PortalComp />} />
          </Routes>
        </BrowserRouter>
      </LastNameContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
