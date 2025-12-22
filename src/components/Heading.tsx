import styles from './Heading.module.css';

export function Heading() {
  // Utilizando classes do CSS Modules. Aentar para a convenção usada em JS para concatenar strings.
  return (
    <h1 className={`${styles.corFundo} ${styles.corFonte}`}>Olá Mundo!</h1>
  );
}
