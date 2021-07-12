const platforms = document.querySelectorAll('.projectslist__listing__activities-counter');

if (platforms.length > 0) {
  fetch('/assets/github_issues.json')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const selected = document.querySelector(`#projectslist-activity-counter-${data[i].project}`);
        if (selected) {
          let counter = parseInt(selected.innerHTML, 10);
          counter++;
          selected.innerHTML = `${counter}`;
          document.getElementById(`projectslist__listing__activities-container-${data[i].project}`).style.visibility =
            'visible';
        }
      }
    });
}
