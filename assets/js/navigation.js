function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('open');
}