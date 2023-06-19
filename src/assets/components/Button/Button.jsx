import styles from "./Button.module.css";

function Button(props) {
  // const className = param.class;
  // console.log(clas)
  return (
    <button
      className={props.isBottom ? styles.secondary_btn : styles.primary_btn}>
      {props.content}
    </button>
  );
}

export default Button;
