import express from "express";
import productsRoutes from "./routes/products/index";
import authRoutes from "./routes/auth/index";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
