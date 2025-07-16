const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('transactionFile'), (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log('Uploaded file:', req.file);
    res.json({ message: 'File uploaded successfully', file: req.file });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});