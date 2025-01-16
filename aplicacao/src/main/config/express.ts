import express from 'express'
import pedidos from '../routes/pedidos'
import pedidos_itens  from '../routes/pedidos_itens';
//import alimentos  from '../routes/alimentos';
//import ingredientes_alimentos  from '../routes/ingredientes_alimentos';
//import ingredientes  from '../routes/ingredientes';

const porta = process.env.PORT || 3000;

export async function Express() {
    if (process.env.NODE_ENV === 'development') {
        const server = express()

        console.log('Iniciando servidor de testes...')

        server.use(express.json())

        server.use('/pedidos', pedidos)
        server.use('/pedidos_itens', pedidos_itens)
        
        // A fazer...
        //server.use('/alimentos', alimentos)
        //server.use('/ingredientes_alimentos', ingredientes_alimentos)
        //server.use('/ingredientes', ingredientes)

        server.listen(porta, () => {
          console.log(`Servidor de testes rodando no endereco: http://localhost:${porta}`)
        })
    }    
}