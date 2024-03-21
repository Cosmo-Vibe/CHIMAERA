document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that have an href starting with '#'
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();
  
        // Get the href attribute of the clicked link
        const targetId = this.getAttribute('href');
  
        // Use the ID to select the target element
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({ behavior: 'smooth' });
  
          // Update the URL hash
          history.pushState(null, null, targetId);
        }
      });
    });
  });
  