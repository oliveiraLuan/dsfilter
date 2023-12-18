import { useState } from 'react';
import './styles.css';

type Props = {
    onFilter : Function;
}

export default function Filter({onFilter} : Props){

    const[minValue, setMinValue] = useState<number>();
    const[maxValue, setMaxValue] = useState<number>();

    function handleClickFilter(event : any){
        event.preventDefault(); 
        onFilter(minValue, maxValue);
    }

    function handleOnChangeMinValue(event : any){
        setMinValue(event.target.value);
    }

    function handleOnChangeMaxValue(event : any){
        setMaxValue(event.target.value);
    }

    return (
    <div className="filter-container">
        <form action="submit">
            <input 
            value={minValue}
            type="text" 
            name="minValue" 
            id="minValue" 
            placeholder="Preço mínimo" 
            onChange={handleOnChangeMinValue}
            />
            <input 
            value={maxValue}
            type="text" 
            name="maxValue" 
            id="maxValue" 
            placeholder="Preço máximo"
            onChange={handleOnChangeMaxValue}
            />
            <button onClick={handleClickFilter}>Filtrar</button>
        </form>
    </div>
    );
}