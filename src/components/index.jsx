 import { useState } from 'react'


export default function Index() {
    const [numero, setNumero] = useState(0)
    const soma = () => {
        if (numero < 10) {
            setNumero(numero + 1)
        }
    }
    const sub = () => {
        if (numero > 0) {

            setNumero(numero - 1)
        }
    }

    return (
        <>
            <main>
                <div className='card'></div>
                <section>
                    <button onClick={sub} >-</button>

                    <figure>
                        <img src="https://cdn-icons-png.flaticon.com/128/5724/5724391.png" alt="" />
                        <figcaption>{numero}</figcaption>
                    </figure>
                    <button onClick={soma}>+</button>
                </section>
            </main>
        </>
    )
}