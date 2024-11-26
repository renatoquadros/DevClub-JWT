import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)


// npm init -y para criar package.json
// npm install express para a biblioteca express
// adicionar type module no package.json

//3 Rotas, Cadastrar, login e acessar



app.listen(3000, () => console.log("Servidor Rodando 🚀"))