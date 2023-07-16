function redirectToGithub() {
  window.location.href = 'https://github.com/Ljduley12';
}

function showPage(pageId) {
  // Hide all page sections
  const pageSections = document.querySelectorAll('#content > div');
  pageSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'block';

  // Load specific scripts for each page
  if (pageId === 'search') {
    const script = document.createElement('script');
    script.src = 'index.js';
    document.body.appendChild(script);
  }
}
