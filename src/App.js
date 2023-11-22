import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Atividades from './Atividades';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/atividades" element={<Atividades />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;