document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('transactionFile');
    const file = fileInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('transactionFile', file);

        // Use relative path for Netlify deployment, fallback to localhost for development
        const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:8080/upload' : '/api/upload';
        fetch(apiUrl, {
            mode: 'cors',
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) throw new Error('Upload failed');
            return response.json();
        })
        .then(data => {
            // Display the results in the result container
            document.querySelector('.result-container').style.display = 'block';
            document.getElementById('receiverName').textContent = data.receiver || '';
            document.getElementById('amount').textContent = data.amount || '';
        })
        .catch(error => {
            alert('Error uploading file: ' + error.message);
            console.error('Upload error:', error);
        });
    } else {
        alert('Please select a file.');
    }
});