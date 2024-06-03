import styles from "./styles.module.css"

export default function Btn({url, btnContent}) {
    return (
        <a 
            className={styles.wrapper} 
            href={url} 
            target="_blank">
                {btnContent}
        </a>
    )
}