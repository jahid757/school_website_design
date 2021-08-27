// Show Current Month

const date = document.querySelectorAll('.date');
const newDate = new Date();
const day = newDate.getDay();
const month = newDate.toLocaleString('default', { month: 'long' });
const year = newDate.getFullYear();

for (let i = 0; i < date.length; i++) {
    const element = date[i];
    element.innerText = `${day}/ ${month}/ ${year}`;
}

//  calender

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });