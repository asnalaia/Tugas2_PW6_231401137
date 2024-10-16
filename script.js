const rootDiv = document.querySelector('.root');

const formHeading = document.createElement('h1');
formHeading.textContent = "Tugas-2 Praktikum Pemrograman Web";
formHeading.classList.add('header');
rootDiv.appendChild(formHeading);

const lineBreak = document.createElement('hr');
lineBreak.classList.add('heading-line');
rootDiv.appendChild(lineBreak);

const container = document.createElement('div');
container.classList.add('container');
rootDiv.appendChild(container);

const formContainer = document.createElement('div');
formContainer.classList.add('form-container');
container.appendChild(formContainer);

const form = document.createElement('form');
form.id = 'dataForm';
formContainer.appendChild(form);

form.innerHTML = `
    <label for="username">Username</label>
    <input type="text" id="username" placeholder="Asnawati Laia" required>
    
    <label for="nim">NIM</label>
    <input type="text" id="nim" placeholder="231401137" required>
    
    <label for="kom">KOM</label>
    <input type="text" id="kom" placeholder="C" required>
    
    <label for="photo">Upload Photo</label>
    <input type="file" id="photo" required>
    
    <button type="submit">Submit</button>
`;

const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container');
container.appendChild(resultContainer);

const photoPreview = document.createElement('img');
resultContainer.appendChild(photoPreview);

const usernamePreview = document.createElement('p');
resultContainer.appendChild(usernamePreview);

const nimPreview = document.createElement('p');
resultContainer.appendChild(nimPreview);

const komPreview = document.createElement('p');
resultContainer.appendChild(komPreview);

showNotification('Selamat datang! Silakan isi form di bawah.');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    showNotification('Form berhasil disubmit!');

    usernamePreview.textContent = `Username: ${document.getElementById('username').value}`;
    nimPreview.textContent = `NIM: ${document.getElementById('nim').value}`;
    komPreview.textContent = `KOM: ${document.getElementById('kom').value}`;

    const file = document.getElementById('photo').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    formContainer.style.width = '38%';
    formContainer.style.padding = '5%';
    resultContainer.style.display = 'block';
    resultContainer.style.width = '35%';
});

function showNotification(message) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');

    const notificationMessage = document.createElement('p');
    notificationMessage.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Tutup';
    closeButton.addEventListener('click', () => {
        notificationElement.remove();
    });

    notificationElement.appendChild(notificationMessage);
    notificationElement.appendChild(closeButton);
    rootDiv.appendChild(notificationElement);

    setTimeout(() => {
        notificationElement.remove();
    }, 5000);
}