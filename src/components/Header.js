import styles from './Header.module.css'

const Header = ()=>{

    return (
        <div className={styles.topo}>
        <nav>
            <ul>
                <li><a href="#">Para comer</a></li>
                <li><a href="">Para beber</a></li>
                <li><a href="">Sobremessa</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Header;