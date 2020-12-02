//express server
import express from 'express';
const app = express();

//middleware server
app.use((req,res,next) => {
    console.log('welcome in first middleware 😻 ');
    next();
})


//router server

export default app;





