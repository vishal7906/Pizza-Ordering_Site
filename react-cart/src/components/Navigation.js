import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
                </Link>
                <ul className="flex items-center">
                    <li><Link to="/">Home</Link></li>
                    <li className="ml-6"><Link to="/products">Products</Link></li>
                    <li className="ml-6">
                        <Link to="/cart">
                            <div className="bg-yellow-500 flex items-center p-2 rounded-full">
                                <span>{cart?.totalItems || 0}</span>
                                <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
