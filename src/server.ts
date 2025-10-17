import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import rateLimit from 'express-rate-limit';
import userRoute from './route/userRoute';

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.'
  }
});

app.use(limiter);
app.use(express.json());
app.use("/api", userRoute);

app.get('/', (req, res) => {
  res.send('HNG Internship Stage 0 Task');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app, limiter }
