import express from "express"
import path from "path"
import ejs from "ejs"
import modules from './modules/index.js'
import './config/index.js'

!async function () { 
    const app = express()

    app.engine('html', ejs.renderFile)

    app.set('view engine', 'html')
    app.set('views', path.join(process.cwd(), 'src', 'views'))

    app.use(express.static(path.join(process.cwd(), 'src', 'public')))

    app.use(modules)

    app.listen(
        process.env.PORT,
        () => console.log('server ready at http://localhost:' + process.env.PORT)
    )
}()