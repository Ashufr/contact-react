import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.btn}>
          <div className={styles.top_btn}>
            <Button content="VIA SUPPORT CHAT" />
            <Button content="VIA CALL" />
          </div>
          <div className={styles.bottom_btn}>
            <Button isBottom={true} content="VIA EMAIL FORM" />
          </div>
        </div>

        <form action="">
          <div className={styles.form_container}>
            <label htmlFor="name" className={styles.form_name}>
              Name
            </label>
            <input type="text" name="name" className={styles.primary_input} />
            <label htmlFor="mail" className={styles.form_name}>
              E-Mail
            </label>
            <input type="text" name="mail" className={styles.primary_input} />
            <label htmlFor="text" className={styles.form_name}>
              Text
            </label>
            <input type="text" name="text" className={styles.text_input} />
          </div>
        </form>
      </div>
      <div className={styles.img}>
        <img src="public/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
}

export default Form;
