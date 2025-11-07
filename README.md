# CBE Transaction Checker

A web application that extracts transaction information from Commercial Bank of Ethiopia (CBE) transaction PDF files. Users can upload a PDF transaction file, and the application will automatically extract and display the receiver name and transaction amount.

## Features

- 📄 PDF file upload and parsing
- 🔍 Automatic extraction of receiver name and transaction amount
- 🎨 Clean and simple user interface
- ⚡ Fast and efficient processing

## How It Works

1. Upload a CBE transaction PDF file through the web interface
2. The backend parses the PDF and extracts:
   - **Receiver Name**: The account number associated with the receiver
   - **Amount**: The transaction amount
3. The extracted information is displayed on the screen

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js
- **PDF Processing**: pdf-parse library
- **File Upload**: Multer middleware

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/natasteria/cbeTransactionChecker>
cd cbeTransactionChecker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
node server.js
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
cbeTransactionChecker/
├── public/
│   ├── index.html      # Main HTML file
│   ├── script.js       # Frontend JavaScript
│   └── style.css       # Styling
├── server.js           # Express server and API endpoints
├── package.json        # Project dependencies
└── netlify.toml        # Netlify deployment configuration
```

## API Endpoints

### POST /upload
Uploads and processes a PDF transaction file.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: FormData with `transactionFile` field containing the PDF file

**Response:**
```json
{
  "receiver": "251945455141",
  "amount": "5.00"
}
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

**Note:** For Netlify deployment, you'll need to convert the Express server to a Netlify serverless function. The current configuration assumes the server will be adapted for serverless deployment.

## Dependencies

- `express`: Web framework for Node.js
- `cors`: Enable CORS for cross-origin requests
- `multer`: Handle multipart/form-data for file uploads
- `pdf-parse`: Parse and extract text from PDF files


