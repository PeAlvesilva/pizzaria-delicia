document.getElementById('toggleBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        this.textContent = 'Ocultar Menu';
    } else {
        sidebar.classList.add('hidden');
        this.textContent = 'Mostrar Menu';
    }
});