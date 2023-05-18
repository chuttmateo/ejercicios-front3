import styles from './Lista.module.css'

function Lista(prop) {
    return(
        <ul className={styles.Lista}>{prop.children}</ul>
    )
}
export default Lista