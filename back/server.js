import app from './app.js'
import dotenv from 'dotenv';
dotenv.config();








//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server run in ${process.env.NODE_ENV} on port ${PORT} 🙂 ...`);
})