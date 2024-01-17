import express, { Application, Request, Response } from "express";
import cors from "cors";
import OpenAI from "openai"; 
import * as dotenv from "dotenv"
dotenv.config()

const PORT: number = 8000;
const API_KEY: string = (process.env.OPENAI_API_KEY as string);




const app: Application = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: API_KEY }); // Updated OpenAI initialization

// Your express routes go here

app.post("/completions", async ( req: Request, res: Response) => {
    try {
        const completion = await openai.chat.completions.create({ 
            model:"gpt-3.5-turbo",
            messages: [{role: "user", content:"Create a SQL request to " + req.body.message}]
        })
        res.send(completion.choices[0].message) 
        //console.log(completion.choices[0]);

    } catch (error) {
        console.error(error)
        res.status(500).send("server error")
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

