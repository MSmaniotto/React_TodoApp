import styles from "@/styles/Header.module.css";
import '@/styles/app.css';

const headerStyle = {
  padding: '20px 0' as const,
  lineHeight: '1.5em' as const,
  color: '#aeadad' as const,
  textAlign: "center" as const
};

const Header = () => {
    return (
      <header style={headerStyle} className={styles.header}>
        <h1>todos</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
    );
  };
  export default Header;
  