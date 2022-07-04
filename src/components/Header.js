import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = ()=>{

    return (
        <div className={styles.topo}>
        <nav>
            <ul>
                <Link to='/Hamburgueria/comidas'>Para comer</Link>
                <Link to='/Hamburgueria/bebidas'>Para beber</Link>
                <Link to='/Hamburgueria/sobremesa'>Sobremesa</Link>
            </ul>
        </nav>
    </div>
    )
}

export default Header;