import './CampoTexto.css';


interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
};

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento:  React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value) //aoAlterado: uma função que é chamada toda vez que o usuário digita algo no campo de texto.
    } //Quando o usuário digita no campo, a função aoDigitado é chamada. 
    //Essa função captura o texto digitado e envia o valor atualizado para o componente pai (através da função aoAlterado).

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} //valor: o valor atual do campo de texto.
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada} 
            />
        </div>
    )
};

export default CampoTexto