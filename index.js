import express from "express";
import bodyParser from "body-parser";
import ejs, { render } from 'ejs'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))


const homeStartingContent  = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati rem incidunt enim porro illo sit reprehenderit molestias, repellendus, necessitatibus odit tempora quas? Expedita, enim saepe tempore voluptatem quisquam suscipit illo?"


app.get('/', (req, res)=>{
    res.render('home', {homeStartingContent: homeStartingContent})
})

app.listen(3000, ()=>console.log("Server started on port 3000"))