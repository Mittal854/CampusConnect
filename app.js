import express from 'express';
const app=express();
const port=3000;
import web from './routes/web.js'

app.set('view engine','ejs');

app.use(express.static('public'));

app.use('/',web);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});