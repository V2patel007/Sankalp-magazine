// Form validation functions

// Validate Indian phone number
function validateIndianPhone(phone) {
  // Remove all non-digit characters
  const cleanedPhone = phone.replace(/\D/g, '');
  
  // Check if it's exactly 10 digits (since we're handling +91 separately)
  const regex = /^[6-9]\d{9}$/;
  
  return regex.test(cleanedPhone);
}

// Validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Add event listeners for real-time validation
document.addEventListener('DOMContentLoaded', () => {
  // Phone validation
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phone-error');
  
  phoneInput.addEventListener('input', () => {
    if (phoneInput.value.trim() !== '') {
      if (!validateIndianPhone(phoneInput.value)) {
        phoneError.textContent = 'Please enter a valid 10-digit mobile number';
        phoneInput.style.borderColor = 'var(--error-color)';
      } else {
        phoneError.textContent = '';
        phoneInput.style.borderColor = 'var(--success-color)';
      }
    } else {
      phoneError.textContent = '';
      phoneInput.style.borderColor = 'var(--dark-color)';
    }
  });
  
  // Email validation
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  
  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = 'var(--error-color)';
      } else {
        emailError.textContent = '';
        emailInput.style.borderColor = 'var(--success-color)';
      }
    } else {
      emailError.textContent = '';
      emailInput.style.borderColor = 'var(--dark-color)';
    }
  });
  
  // Consent checkbox validation
  const consentCheckbox = document.getElementById('consent');
  const consentError = document.getElementById('consent-error');
  
  consentCheckbox.addEventListener('change', () => {
    if (!consentCheckbox.checked) {
      consentError.textContent = 'Please check this box to proceed';
    } else {
      consentError.textContent = '';
    }
  });
});