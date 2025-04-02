document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.querySelector('.modal-container');
  const modalContent = document.querySelector('.modal-content');
  const modalTriggers = document.querySelectorAll('.modal-trigger');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalType = trigger.dataset.modal;
      
      // Set modal content based on type
      const modalData = getModalContent(modalType);
      modalContent.innerHTML = `
        <h2>${modalData.title}</h2>
        <div>${modalData.content}</div>
      `;
      
      // Show modal
      modalContainer.classList.add('active');
    });
  });

  // Close modal when clicking outside
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modalContainer.classList.remove('active');
    }
  });

  // Modal content mapping
  function getModalContent(type) {
    const content = {
      blog: {
        title: 'Blog',
        content: '<p>Coming soon...</p>'
      },
      email: {
        title: 'Contact',
        content: '<p>Email: your.email@example.com</p>'
      },
      bluesky: {
        title: 'Bluesky',
        content: '<p>Follow me on Bluesky: @username</p>'
      },
      linkedin: {
        title: 'LinkedIn',
        content: '<p>Connect with me on LinkedIn</p>'
      },
      talks: {
        title: 'Conference Talks',
        content: '<p>Watch my latest conference talks and presentations</p>'
      },
      github: {
        title: 'GitHub',
        content: '<p>Check out my open source contributions</p>'
      }
    };
    
    return content[type] || {
      title: 'Error',
      content: '<p>Content not found</p>'
    };
  }
});
