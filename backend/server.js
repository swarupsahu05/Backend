import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Get a list of 5 jokes
app.get('/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why don’t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 3,
            title: 'Yet another joke',
            content: 'Why did the bicycle fall over? Because it was two-tired!'
        },
        {
            id: 4,
            title: 'One more joke',
            content: 'Why did the math book look sad? Because it had too many problems.'
        },
        {
            id: 5,
            title: 'Last joke',
            content: 'Why did the tomato turn red? Because it saw the salad dressing!'
        }
    ];

    res.json(jokes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});