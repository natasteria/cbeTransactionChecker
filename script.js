document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('transactionFile');
    const file = fileInput.files[0];
    if (file) {
        
        const formData = new FormData();
        formData.append('transactionFile', file);

        fetch('http://localhost:8080/upload', {
            mode: 'cors',
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) throw new Error('Upload failed');
            return response.json();
        })
        .then(data => {
            alert('File uploaded successfully!');
            console.log('Server response:', data);
        })
        .catch(error => {
            alert('Error uploading file: ' + error.message);
            console.error('Upload error:', error);
        });
    } else {
        alert('Please select a file.');
    }
});