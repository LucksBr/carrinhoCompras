export default function Header({image, AlterarStatus}) {


    return (
            <header>
                <div className="logo">
                    C
                </div>

                <div>
                    <h1>CONNECT</h1>
                    <p>A melhor loja de tecnologia gamer do Brasil</p>
                </div>
                <img src={image} alt="a" onClick={() => AlterarStatus(true)}></img>
            </header>
    )
}