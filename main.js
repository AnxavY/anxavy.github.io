async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;

    if (id === 'navbar-component') {
      updateBreadcrumbs();
    }
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

function updateBreadcrumbs() {
  const path = window.location.pathname;
  const page = path.split('/').pop();

  const breadcrumbList = document.querySelector('.breadcrumbs ul');
  const secondaryItem = breadcrumbList.querySelector('li:nth-child(2)');

  if (page === 'index.html' || page === '') {
    secondaryItem.textContent = '';
  } else {
    secondaryItem.textContent = page;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar-component', './src/components/navbar.html');
  loadComponent('footer-component', './src/components/footer.html');
  loadComponent('sidebar-component', './src/components/sidebar.html');
});
