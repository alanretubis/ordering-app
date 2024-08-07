import express, {Request, Response} from 'express';
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 8080;

// var corsOptions = {
//     origin: process.env.CLIENT_ORIGIN || `http://localhost:${PORT}`
// };

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
    res.json({message: 'Hello World!'})
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});