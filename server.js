const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const pdfParse = require('pdf-parse');
const app = express();
const fs = require('fs');


app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('transactionFile'), async (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const data = await pdfParse(req.file.buffer);
        const text = data.text;

        // Extract only the receiver name number (e.g., Receiver Name251945455141)
        const receiverMatch = text.match(/Receiver Name\s*:?(\d+)/i);
        const receiverName = receiverMatch ? receiverMatch[1].trim() : null;
        console.log('Receiver Name:', receiverName);

        // Extract the amount after the time (e.g., 20:43 5.00)
        const amountMatch = text.match(/\d{2}:\d{2}\s*([\d.]+)/);
        const amount = amountMatch ? amountMatch[1] : null;
        console.log('Amount:', amount);

        res.json({ receiver:receiverName, amount:amount });
    } catch (err) {
        res.status(500).json({ error: 'Error parsing PDF' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});