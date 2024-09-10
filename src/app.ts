import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
    res.status(200).json({ status: 200, message: 'Selamat datang di API gueh' });
})

app.use('/api/products', productRoutes);
app.use('/api/v1/products', productRoutes);

export default app;
