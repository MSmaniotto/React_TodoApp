import styles from "@/styles/Header.module.css";
import "@/styles/app.css";

const headerStyle = {
  padding: "20px 0" as const,
  lineHeight: "1.5em" as const,
  color: "#aeadad" as const,
  textAlign: "center" as const,
};

const Header = (props:any) => {
  return (
    <header style={headerStyle} className={styles.header}>
      {props.children}
    </header>
  );
};
export default Header;
