import { useContext } from 'react';
import './styles.css';
import { ContextCountProducts} from '../../utils/context-products';

export default function Header(){

    const {contextProductsCount} = useContext(ContextCountProducts);

    return (
    <>
        <header>
            <h1>DSFilter</h1>
            <p>{contextProductsCount} produto(s)</p>
        </header>
    </>);
}