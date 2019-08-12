import express from 'express'

const app = express();
const DIST_DIR = __dirname;

app.use(express.static(DIST_DIR));

app.get('*', (_, res) => {
    res.send(JSON.stringify({ body: 'OK' }));
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    const test = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = test;
    console.log(a, rest, 'BITCH');
    console.log(`App1 listening to ${PORT}....`)
    console.log(`Dist directory ${DIST_DIR}`)
    console.log('Press Ctrl+C to quit.')
})
