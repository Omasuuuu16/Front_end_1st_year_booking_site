document.getElementById('hotel-booking-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const roomType = document.getElementById('room-type').value;
  const roomView = document.getElementById('room-view').value;

  // Date validation
  const today = new Date().toISOString().split('T')[0];
  if (checkIn < today) {
    alert('Check-in date cannot be in the past.');
    return;
  }

  if (checkOut <= checkIn) {
    alert('Check-out date must be after check-in date.');
    return;
  }

  // Display confirmation
  document.getElementById('customer-name').textContent = name;
  document.getElementById('customer-check-in').textContent = checkIn;
  document.getElementById('customer-check-out').textContent = checkOut;
  document.getElementById('customer-room-type').textContent = roomType;
  document.getElementById('customer-room-view').textContent = roomView;

  document.getElementById('hotel-booking-form').style.display = 'none';
  document.getElementById('confirmation-message').style.display = 'block';
});
