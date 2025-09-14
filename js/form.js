// Form handling script
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const heroSection = document.getElementById('hero-section');
  const formSection = document.getElementById('form-section');
  const startFormBtn = document.getElementById('start-form');
  const typeform = document.getElementById('typeform');
  const nextButtons = document.querySelectorAll('.next-btn');
  const progressBar = document.getElementById('progress-bar');
  const questions = document.querySelectorAll('.question');
  const videos = document.querySelectorAll('.question-video');
  const successPopup = document.getElementById('success-popup');
  const closePopupBtn = document.querySelector('.close-popup');

  // Progress tracking
  let currentQuestionIndex = 0;
  const totalQuestions = questions.length;

  // Update progress bar
  function updateProgress() {
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
  }

  // Show specific question and hide others
  function showQuestion(index) {
    // Hide all questions
    questions.forEach(question => {
      question.classList.remove('active');
    });
    
    // Hide all videos
    videos.forEach(video => {
      video.classList.remove('active');
    });
    
    // Show current question and video
    questions[index].classList.add('active');
    const videoId = `question-video-${index + 1}`;
    const currentVideo = document.getElementById(videoId);
    if (currentVideo) {
      currentVideo.classList.add('active');
    }
    
    // Update progress
    currentQuestionIndex = index;
    updateProgress();
  }

  // Start form
  startFormBtn.addEventListener('click', () => {
    heroSection.style.display = 'none';
    formSection.style.display = 'block';
    showQuestion(0);
  });

  // Handle next button clicks
  nextButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const currentQuestion = e.target.closest('.question');
      const input = currentQuestion.querySelector('input');
      
      // Validate input
      if (!input.value.trim()) {
        input.style.borderColor = 'var(--error-color)';
        return;
      }
      
      // If it's the phone input, validate using the validation function
      if (input.id === 'phone' && !validateIndianPhone(input.value)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid Indian phone number';
        return;
      }
      
      // Reset validation styles
      input.style.borderColor = 'var(--dark-color)';
      
      // Get next question ID
      const nextQuestionId = button.getAttribute('data-next');
      const nextQuestion = document.getElementById(nextQuestionId);
      
      // Get index of next question
      const nextIndex = Array.from(questions).findIndex(q => q.id === nextQuestionId);
      
      if (nextIndex !== -1) {
        showQuestion(nextIndex);
      }
    });
  });

  // Handle form submission
  typeform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      consent: document.getElementById('consent').checked
    };
    
    // Validate consent checkbox
    if (!formData.consent) {
      document.getElementById('consent-error').textContent = 'Please check this box to proceed';
      return;
    }
    
    // Clear error message
    document.getElementById('consent-error').textContent = '';
    
    // Show success popup
    successPopup.style.display = 'flex';
    
    // Store data in localStorage (for demo purposes)
    localStorage.setItem('pizzaFormData', JSON.stringify(formData));
  });

  // Close popup and show map
  closePopupBtn.addEventListener('click', () => {
    successPopup.style.display = 'none';
    
    // Show Google Maps with a store location
    showMap();
  });
});