import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './authForm.module.css';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const navigateHome = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className={styles.authContainer}>
      {isRegister ? (
        <div className={styles.authForm} id="register">
          <h2>Registro</h2>
          <form onSubmit={navigateHome}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Registrarse</button>
          </form>
          <p onClick={toggleForm}>¿Ya tienes una cuenta? Inicia Sesión</p>
        </div>
      ) : (
        <div className={styles.authForm} id="login">
          <h2>Inicio de Sesión</h2>
          <form onSubmit={navigateHome}>
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <p onClick={toggleForm}>¿No tienes una cuenta? Regístrate</p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
