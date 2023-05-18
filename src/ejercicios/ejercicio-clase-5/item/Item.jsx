import styles from './Item.module.css'

function Item(props) {
    return(
        // eslint-disable-next-line react/prop-types
        <li className={styles.Item}>{props.children}</li>
    )  
}
export default Item