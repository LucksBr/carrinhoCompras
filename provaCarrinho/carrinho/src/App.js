import './App.css';
import './Carrinho.css'
import './responsive.css'
import { useState } from "react"

import Card from './components/Card';
import Carrinho from './components/Carrinho';
import Header from './components/Header';
import Main from './components/Main';

import img_carrinho from "../src/img/carrinhoBlack.png"
import img_kitGamer from "../src/img/kitGamer.jfif"
import img_console from  "../src/img/console.jfif"
import img_cpu from "../src/img/cpu.jpg"
import img_fone from "../src/img/fone.jfif"
import img_monitor from "../src/img/monitor.jpg"
import img_mousepad from "../src/img/mousepad.jpg"

const products = [
  {id  : 0, title : "Kit Gamer", price : 2300 , img : img_kitGamer, quantidade : 1, total : 0 },
  {id  : 1, title : "Nitendo Swicth", price : 600 , img : img_console, quantidade : 1, total : 0 },
  {id  : 2, title : "Computador Gamer", price : 1700 , img : img_cpu, quantidade : 1, total : 0 },
  {id  : 3, title : "Fone Bluetooth", price : 230 , img : img_fone, quantidade : 1, total : 0 },
  {id  : 4, title : `Monitor LED 45'`, price : 1000 , img : img_monitor, quantidade : 1, total : 0 },
  {id  : 5, title : "Mousepad Básico", price : 35 , img : img_mousepad, quantidade : 1, total : 0 },
]



const html = document.querySelector("html")


function App() {

  const [listProducts, setListProducts] = useState([{id  : undefined, title : "", price : 0 , img : "", quantidade : 0, total : 0 }])

  const [statusCarrinho,setStatusCarrinho] = useState(["backCarrinhoON backCarrinhoOFF"," carrinhoONcarrinhoOFF"])

 

  const somarCarrinho = (ide) => {

    

    let prices = listProducts.map((e) => {
      return e.price

    })

    let quantidades = listProducts.map((e) => {
      return e.quantidade

    })

    let total = 0
   
  

    for (let i = 0; i < prices.length  ; i++){
        let soma = prices[i] * quantidades[i]
        total += soma
        
    }

    if(total > 1000) {
      total = total * 0.9
     
    } 

    setTotalCarrinho(total)

  }

  const [totalCarrinho,setTotalCarrinho] = useState(0)

  const MudarStatusCarrinho = (status) => {

    if(status) {
      setStatusCarrinho(["backCarrinhoON","carrinhoON"])
      html.style.overflow = "hidden"
      somarCarrinho()
    } else {
      setStatusCarrinho(["backCarrinhoON backCarrinhoOFF"," carrinhoONcarrinhoOFF"])
      html.style.overflowY = "scroll"
    }


  }


  const Add_Products = (id) => {

    let newProducts = Array.from(listProducts)

    let elementID = newProducts.findIndex((e) =>  e.id === id)


    if ( elementID === -1 ) {
      newProducts.push(products[id])
      somarCarrinho()
      alert("Adicionado ao carrinho " + products[id].title)
    } else {
      Calc_Quantidade(id,true)
      alert("Adicionado mais um " + products[id].title)
    }

    setListProducts(newProducts)

  }

  const Calc_Quantidade = (identify,status) => {

      let newProducts = Array.from(listProducts)
      let element = newProducts.findIndex((e) =>  e.id === identify)
      let id = element 

      const verificarTamanho = () => {
        if (newProducts[id].quantidade < 1) {
          somarCarrinho()
          newProducts[id].quantidade = 1
          newProducts.splice(id,1)
        } else if ( newProducts[id].quantidade > 20) {
          newProducts[id].quantidade = 20
          alert("Limite maximo de 20 itens por produto!")
        }
      }
  
    
    if(status) {

      newProducts[id].quantidade++
      verificarTamanho()
      somarCarrinho()

    } else {
      newProducts[id].quantidade--
      somarCarrinho()
      verificarTamanho()
      
      
    }

    setListProducts(newProducts)
    
  

   
  }

  const limpeCarrinho = () => {

    alert("Compra feita com sucesso!")

    let copyList = Array.from(listProducts)
    copyList.splice(1, copyList.length - 1)
    setListProducts(copyList)

    setTotalCarrinho(0)

  }
  
  return (
   <>
    
    <div id="page">
      
      <Header image={img_carrinho} AlterarStatus={MudarStatusCarrinho}/>
      
      <Main>
        {
          products.map((element,i) => {
            
            return (
              <Card title={element.title} price={element.price} img={element.img} key={i} AddProducts={() => Add_Products(element.id)}></Card>
            )
          })
        }        
      </Main>
      <Carrinho AlterarStatus={MudarStatusCarrinho} status={statusCarrinho} listItens={listProducts} ControlQuantidade={(id,status) => Calc_Quantidade(id,status)} totalCarrinho={totalCarrinho} aplicacaoDeDesconto={(id) => somarCarrinho(id)} limpar={() => limpeCarrinho()} />
      <footer>
        <p>CONNECT ETERPRISE</p>
        <p>Copyright 2022</p>
      </footer>
    </div>
   </>
  );
}

export default App;
