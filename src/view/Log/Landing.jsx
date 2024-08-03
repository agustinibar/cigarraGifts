import  AuthForm  from '../../components/AuthForm/AuthForm';
import styles from './landing.module.css';

const Landing = ()=>{

    return(
        <div className={styles.landingPage}>
        <header className={styles.heroSection}>
          <h1>Bienvenidos a Cigarra Gifts</h1>
          <p>Encuentra el regalo perfecto para cualquier ocasión</p>
        </header>
        <AuthForm/>
      </div>
    )
};

export default Landing