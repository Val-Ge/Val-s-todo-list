import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from "./routes/todosRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//Use the routes from the routes folder
app.use("/api", todoRoutes);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});
