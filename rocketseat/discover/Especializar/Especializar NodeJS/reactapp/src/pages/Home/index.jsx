import { Card } from '../../components/Card'

import './styles.css'

export function Home() {
  return (
    <div className='container'>
      <h1> Lista de Presença </h1>
      <input type="text" placeholder="Digite o nome . . ."/>
      <button type="button"> Adicionar </button>

      <Card name='Alex Ferro' time="10:10:10"/>
      <Card name='Rodrigo' time="11:11:11"/>
      <Card name='Mayk Brito' time="12:12:10"/>
    </div>
  )

}

