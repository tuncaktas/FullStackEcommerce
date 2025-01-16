import express from "express";
import productsRoutes from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";
import serverless from "serverless-http";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);

if (process.env.NODE_ENV === "dev") {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}

export const handler = serverless(app);
