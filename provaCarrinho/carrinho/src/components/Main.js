export default function Main(props) {


    return (
        <main>
            <h1>Produtos</h1>
            <div className="contentProducts">
                {props.children}
            </div>
        </main>
    )

}