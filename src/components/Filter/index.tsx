import './styles.css';

export default function Filter(){
    return (
    <div className="filter-container">
        <form action="submit">
            <input type="text" name="minValue" id="minValue" placeholder="Preço mínimo" />
            <input type="text" name="maxValue" id="maxValue" placeholder="Preço máximo" />
            <button>Filtrar</button>
        </form>
    </div>
    );
}