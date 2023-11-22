import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Login = () => {

  console.log(process.env.URL_BACKEND)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate ();
  const { saveToken } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.URL_BACKEND}/app/login`, formData, {
        headers: {
          'Content-Type': 'application/json', // Exemplo de cabeçalho
        },
      });
      console.log(response.data); // Se precisar manipular a resposta do backend

      // Captura o token da resposta
      const { token } = response.data;

      // Salva o token no AuthContext
      saveToken(token);

      // Redireciona para outra rota
      navigate('/atividades');

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <h1>{process.env.URL_BACKEND}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
