export default function ProductList({title,price,quantidade,total,controlQuantidade,id}) {

    const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

    const totalMoney = price * quantidade

    const moneyTotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalMoney)

    return (
        
        <div className="productCarrinho">
            <h2>{title}</h2>
            <p>Preço: {money} </p>
            <div className="quantidade">
                <button onClick={() => {
                    controlQuantidade(id,false)
                }}>-</button>
                <p>{quantidade}</p>
                <button onClick={() => {
                    controlQuantidade(id,true)
                }}>+</button>
            </div>
            <p>Total: {moneyTotal}</p>
        </div>
        
    )
      
    
}