export default function Card({title,price,img,AddProducts}) {

    const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

 

    
    return (
        <div className = "card">
            <div className="title">
                <h2>{title}</h2>
            </div>

            <div className="cardVisual">
                <img src={img} alt={`imagem ${title}`}></img>
                <p>{money}</p>
                <button onClick={() => {
                   
                    AddProducts()
                    }}>Adicionar ao Carrinho</button>
            </div>
        </div>
    )

}