
import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>

      <div className="container">
          <div className="col-sm">
            <img src="imagens/layout/logoescuro.png" alt="" />
          </div>
          <div className="col-sm">
           <h3>Funcionamento</h3>
           <div className="txt-ft">
              <h4>Manhã:</h4><h5>8:00 - 12:00</h5>
           </div>
           <div className="txt-ft">
              <h4>Intervalo:</h4><h5>8:00 - 12:00</h5>
           </div>
           <div className="txt-ft">
              <h4>Tarde:</h4><h5>8:00 - 12:00</h5>
           </div>
         
          </div>
          <div className="col-sm">
          <h3>Contato</h3>
          <div className="txt-ft">
              <h4>Telefone</h4><h5>(61) 95682.5324</h5>
           </div>
           <div className="txt-ft">
              <h4>Email</h4><h5>contato.@odontoclean.com.br</h5>
           </div>
          </div>
          <div className="col-sm">
          <h3>Rede social</h3>
            <div className="redes">
                <img src="imagens/layout/vector.png" alt="" />
                <img src="imagens/layout/vector-1.png" alt="" />
            </div>
          </div>
         
      </div>
      <div className="copyright">
          <div className="container">
            <h3> <b>2022 © Odonto Clean.</b> Todos os direitos reservados.</h3>
          </div>
      </div>

    </div>
  )
}
