function Boton({texto, operacion, tipo}) {
    return (
        <button
        className={tipo=="normal"?"boton-normal":tipo=="operacion"?"boton-operacion":"boton-clear"}
        onclick={operacion}
        >{texto}</button>
    );
}
export default Boton;