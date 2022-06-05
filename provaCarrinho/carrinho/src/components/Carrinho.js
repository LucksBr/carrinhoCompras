import img_close from "../../src/img/cancel.png"
import ProductList from "./ProductList"

export default function Carrinho(props) {

    const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.totalCarrinho)

    return (
        <div className={props.status[0]}>
            <div className={props.status[1]}>
                <div className="titleCarrinho">
                    <div></div>
                    <h1>Carrinho</h1>
                    <img src={img_close} alt="close" onClick={() => props.AlterarStatus(false) }></img>
                </div>

                <div id="productsCarrinho">

                    {
                    props.listItens.map((e,i) => {
                        
                        if (i > 0) {
                            return <ProductList title={e.title} price={e.price} quantidade={e.quantidade} total={e.total} key={i} controlQuantidade={(id,status) => props.ControlQuantidade(id,status)} id={e.id}></ProductList>
                        }

                        return ""
                        
                    })


                    }
                    
                    </div>
             

                <div id="total">
                   <div id="price">
                       <h2>Preço Total: {money}</h2>
                       <button onClick={() => props.limpar()}>Comprar</button>
                   </div>

                   <div id="pagamento">

                       <p>
                       Desconto de 10% em compra acima de 1000 reais
                   </p>
                   </div>

                   

                 
                </div>
            </div>
        </div>
    )

}