import express from "express";
import cors from 'cors';
import productRoutes from "./routes/product.routes";
import contactRoutes from "./routes/contact-routes";

const app = express();
app.use(express.json());

const allowedOrigins = [
 'http://localhost:5173',
];

const corsOptions = {
 origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
  if (!origin || allowedOrigins.includes(origin)) {
   callback(null, true);
  } else {
   callback(new Error('Not allowed by CORS'));
  }
 }
};

app.use(cors(corsOptions));
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);

export default app;
