import { PORT } from "./Config";
import  app  from "./startup";
import "./database"
import "./Auth"

app.listen(PORT,()=>{
    console.log(`On Server http://localhost:${PORT}`)
})