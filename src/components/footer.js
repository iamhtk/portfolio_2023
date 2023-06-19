import styles from "@/styles/Footer.module.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className={styles.footer} >
      &copy; Copyright {currYear}, designed & developed by{" "}
      <a href="https://github.com/iamhtk" target="_blank" rel="noreferrer">
        Hrithik Sanyal
      </a>
    </div>
  );
}

export default Footer;
