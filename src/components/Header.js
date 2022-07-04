import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = ()=>{

    return (
        <div className={styles.topo}>
        <nav>
            <ul>
                <Link to='/comidas'>Para comer</Link>
                <Link to='/bebidas'>Para beber</Link>
                <Link to='/sobremesa'>Sobremesa</Link>
            </ul>
        </nav>
    </div>
    )
}

export default Header;