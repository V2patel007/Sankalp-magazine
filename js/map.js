// Updated Google Maps integration with direct custom link
function showMap() {
  const mapUrl = 'https://maps.app.goo.gl/TALBee4HHZ3ofd4f6';
  window.open(mapUrl, '_blank');
}

// Fallback if API is not available
function showMapFallback() {
  const mapModal = document.createElement('div');
  mapModal.className = 'map-modal';

  mapModal.innerHTML = `
<div class="map-modal-content" style="background: #fff; padding: 20px; border-radius: 10px; max-width: 400px; margin: 10% auto; box-shadow: 0 0 10px rgba(0,0,0,0.3); position: relative;">
  <span class="close-map-modal" style="position: absolute; top: 10px; right: 15px; font-size: 24px; cursor: pointer;">&times;</span>
  
  <h2 style="margin-top: 0;">Pizzawala’s Brewing Co.</h2>
  <p>⭐ <strong>4.7</strong> (808 reviews)<br>Best Pizza in Anand</p>

  <p>
    Maruti Solaris Annex, 105-110,<br>
    Anand - Sojitra Rd,<br>
    Vithal Udyognagar, GIDC,<br>
    Anand, Gujarat 388001
  </p>

  <p><strong>Hours:</strong></p>
  <ul style="list-style-type: none; padding: 0;">
    <li>Saturday: 11 am – 11 pm</li>
    <li>Sunday: 11 am – 11 pm</li>
    <li>Monday: 11 am – 11 pm</li>
    <li>Tuesday: 11 am – 11 pm</li>
    <li>Wednesday: 11 am – 11 pm</li>
    <li>Thursday: 11 am – 11 pm</li>
    <li>Friday: 11 am – 11 pm</li>
  </ul>

  <!-- Button to open Google Maps -->
  <button class="map-link-btn" style="padding: 10px 20px; font-size: 16px; background: #4285F4; color: white; border: none; border-radius: 5px; cursor: pointer;">
    Open in Google Maps
  </button>
</div>

  `;

  // Dark backdrop
  mapModal.style.position = 'fixed';
  mapModal.style.top = 0;
  mapModal.style.left = 0;
  mapModal.style.width = '100%';
  mapModal.style.height = '100%';
  mapModal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  mapModal.style.zIndex = '9999';

  document.body.appendChild(mapModal);

  // Close modal
  document.querySelector('.close-map-modal').addEventListener('click', () => {
    document.body.removeChild(mapModal);
  });

  // Open map link
  document.querySelector('.map-link-btn').addEventListener('click', () => {
    showMap();
    document.body.removeChild(mapModal);
  });
}
