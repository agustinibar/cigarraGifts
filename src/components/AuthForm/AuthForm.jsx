import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './authForm.module.css';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isRegister) {
      // Registro de usuario
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name,
          email,
        });
        navigate('/home');
      } catch (error) {
        console.error("Error registrando usuario:", error);
      }
    } else {
      // Inicio de sesión de usuario
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/home');
      } catch (error) {
        console.error("Error iniciando sesión:", error);
      }
    }
  };

  return (
    <div className={styles.authContainer}>
      {isRegister ? (
        <div className={styles.authForm} id="register">
          <h2>Registro</h2>
          <form onSubmit={handleAuth}>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
          </form>
          <p onClick={toggleForm}>¿Ya tienes una cuenta? Inicia Sesión</p>
        </div>
      ) : (
        <div className={styles.authForm} id="login">
          <h2>Inicio de Sesión</h2>
          <form onSubmit={handleAuth}>
            <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <p onClick={toggleForm}>¿No tienes una cuenta? Regístrate</p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;