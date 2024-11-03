import express from 'express';
import { addUserController, deleteUserController, getUsers, updateUserController } from './controllers/userController.js';

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!'); 
});

app.get('/api/users', getUsers);
app.post('/api/users', addUserController);
app.put('/api/users/:id', updateUserController);
app.delete('/api/users/:id', deleteUserController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
