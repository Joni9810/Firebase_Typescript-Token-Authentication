import dotenv from 'dotenv';
dotenv.config();
import * as admin from 'firebase-admin';
import app from './app';

admin.initializeApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        console.log(`App running on port: ${PORT}`)
    } catch (error) {
        process.abort();
    }
})