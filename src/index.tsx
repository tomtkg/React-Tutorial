import './index.css';
import "./styles.css";
import Notfound from './base/Notfound';
import { pages } from "./pages";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const View = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "10px", width: "500px", background: "#f0f0f0" }}>
          {pages.map((page) => (
            <li key={page.key}><NavLink style={({ isActive }) => {
              return { fontWeight: isActive ? "bold" : "" };
            }}
              to={page.path}>{page.key}</NavLink></li>
          ))}
        </div>
        <div style={{ padding: "10px", width: "100%" }}>
          <Routes>
            {pages.map((page) => (
              <Route key={page.key} path={page.path} element={<page.element />} />
            ))}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>
);

