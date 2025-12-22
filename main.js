async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar-component', './src/components/navbar.html');
  loadComponent('footer-component', './src/components/footer.html');
  loadComponent('sidebar-component', './src/components/sidebar.html');
});
