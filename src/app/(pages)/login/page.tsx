// src/app/(pages)/login/page.tsx
'use client'; // Marca este componente como um Client Component
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './Login.module.css'; // Ajuste o caminho do CSS
import { FaLaptop } from 'react-icons/fa'; // Ícone de laptop da biblioteca

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter(); // useRouter do next/navigation

  const handleLogin = () => {
    setLoggedIn(true);
    setTimeout(() => {
      router.push('/dashboard'); // Redireciona para o dashboard após 1 segundo
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Sistema Gestão de Avell</h1>
        <div className={styles.iconContainer}>
          <FaLaptop
            size={50}
            className={`${styles.laptopIcon} ${loggedIn ? styles.loggedIn : ''}`}
          />
        </div>
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}