    let obtenerLocal = document.getElementById('inputText');
    document.getElementById('buttonText').addEventListener('click', (event) => {
      event.preventDefault(); // Evita que se recargue la página
      let dato = document.getElementById('inputText').value;
    
      // Aquí enviarías los datos a data.html, por ejemplo, usando localStorage o un fetch
      localStorage.setItem('dato', dato);
      window.location.href = 'data.html';
    });
    