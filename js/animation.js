// Animation interactions
document.addEventListener('DOMContentLoaded', () => {
  // Add animation to hero elements
  const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero .cta-button');
  
  // Function to animate elements on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('fadeIn');
      }
    });
  }
  
  // Add animations to form transitions
  function setupFormAnimations() {
    const nextButtons = document.querySelectorAll('.next-btn');
    
    nextButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const currentQuestion = e.target.closest('.question');
        
        // Check if validation passes
        const input = currentQuestion.querySelector('input');
        if (!input.value.trim()) {
          // Add shake animation for error
          currentQuestion.classList.add('shake');
          setTimeout(() => {
            currentQuestion.classList.remove('shake');
          }, 500);
          return;
        }
        
        // Input is valid, proceed with animation
        currentQuestion.classList.add('fadeOut');
        
        setTimeout(() => {
          currentQuestion.classList.remove('fadeOut');
          // The actual question change happens in form.js
        }, 300);
      });
    });
  }
  
  // Initialize pizza animation
  function initPizzaAnimation() {
    const pizzaIcon = document.querySelector('.pizza-icon');
    
    if (pizzaIcon) {
      // Pizza already has animation in CSS
      // We can add more complex animations here if needed
    }
  }
  
  // Initialize all animations
  function initAnimations() {
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fadeIn');
      }, 200 * index);
    });
    
    setupFormAnimations();
    initPizzaAnimation();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check for elements in viewport
    animateOnScroll();
  }
  
  // Start animations
  initAnimations();
});