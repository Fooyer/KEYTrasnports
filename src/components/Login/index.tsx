import "./styles.scss";

function LogarPage() {

    return (
        <div id="fundo">
            <div className='box'>
                <form action="">
                    <label htmlFor="usuario">Usuario: </label>
                    <input type="text" name="usuario" />
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" name="senha" />
                </form>
            </div>
        </div>
    )
}
export default LogarPage;