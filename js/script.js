// When page loads
console.log("Portfolio page loaded successfully!");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  alert("Theme toggled!");
}



const githubUsername = 'MOSESSIAME';
const projectGrid = document.getElementById('project-grid');

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      // Create project card
      const card = document.createElement('a');
      card.href = repo.html_url;
      card.target = '_blank';
      card.className = 'project-card';
      card.style.backgroundImage = `url('https://source.unsplash.com/400x300/?technology,code')`; // Random tech image

      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'overlay';

      const title = document.createElement('h3');
      title.textContent = repo.name;

      const description = document.createElement('p');
      description.textContent = repo.description || 'No description provided.';

      overlay.appendChild(title);
      overlay.appendChild(description);
      card.appendChild(overlay);
      projectGrid.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching repositories:', error));
