import styles from "@/styles/Footer.module.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className={styles.footer} >
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://github.com/Yash-bharadwaj/" target="_blank" rel="noreferrer">
        Yashwanth Bharadwaj
      </a>
    </div>
  );
}

export default Footer;
