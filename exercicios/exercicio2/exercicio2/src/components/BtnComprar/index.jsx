import styles from "./styles.module.css"

export default function BtnComprar(props) {
    return <button className={styles.wrapper}>{props.text}</button>;
}