import './styles.css';

export type Props = {
    minValue : number,
    maxValue : number
}

export default function Filter({minValue, maxValue} : Props){

    function handleClickFilter(event : any){
        event.preventDefault();
    }

    function handleOnChangeMinValue(event : any){
        minValue = event.target.value;
    }

    function handleOnChangeMaxValue(event : any){
        maxValue = event.target.value;
    }

    return (
    <div className="filter-container">
        <form action="submit">
            <input 
            value={maxValue}
            type="text" 
            name="minValue" 
            id="minValue" 
            placeholder="Preço mínimo" 
            onChange={handleOnChangeMinValue}
            />
            <input 
            value={minValue}
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