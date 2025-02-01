import { useEffect } from 'react'
import { Alimento } from '../../../main/entity/alimentos'

declare global {
  interface Window {
    api: {
      getAlimentos: () => Promise<Alimento[]>
    }
  }
}

function Home(): JSX.Element {
  useEffect(() => {
    window.api
      .getAlimentos()
      .then((data) => console.log('Dados dos alimentos:', data))
      .catch((error) => console.error('Erro ao buscar alimentos:', error))
  }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Welcome to the home page.</p>
    </div>
  )
}

export default Home
