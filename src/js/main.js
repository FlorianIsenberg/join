
    setURL('https://gruppe-07i.developerakademie.net/smallest_backend_ever');
    let users = [];

    async function init() {
        await downloadFromServer(); 
        users = JSON.parse(backend.getItem('users')) || [];
        backend.setItem('Test', 'Hallo');
        }
    
