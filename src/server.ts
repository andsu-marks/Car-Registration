import app from './app';
import {} from 'dotenv/config';

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.status(200).send('Welcome!!!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));