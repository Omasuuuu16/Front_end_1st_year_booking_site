document.getElementById('hotel-booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const roomType = document.getElementById('room-type').value;
    const roomView = document.getElementById('room-view').value;
  
    // Display confirmation
    document.getElementById('customer-name').textContent = name;
    document.getElementById('customer-check-in').textContent = checkIn;
    document.getElementById('customer-check-out').textContent = checkOut;
    document.getElementById('customer-room-type').textContent = roomType;
  
    document.getElementById('hotel-booking-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
  });
  