import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const Atividades = () => {
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token)
        console.log('esse é o token')
        const response = await axios.get(`${process.env.URL_BACKEND}/app/atividades`, {
          headers: {
            'x-access-token': ` ${token}`,
            'Content-Type': 'application/json'
          },
        });
        
        console.log(response)

      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      <h2>Atividades</h2>
    </div>
  );
};

export default Atividades;