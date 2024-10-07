
const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const userRoutes = require('./src/routes/UserRoutes'); 
const roomRoutes = require('./src/routes/RoomRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB conectado');

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);

app.get('/', (req, res) => {
    res.send('Servidor em funcionando');
  });

