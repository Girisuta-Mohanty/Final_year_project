import React from 'react'
import './events.css';
function Events() {
  return (
    <div class="event-container" id="news-events">
    <h3 class="year">Events</h3>

    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">8</div>
          <div class="month">Nov</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          ratione.
        </div>

        <div class="event-timing">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Event-Calendar/master/images/time.png" alt="" /> 10:00 am
        </div>
      </div>
    </div>

    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">22</div>
          <div class="month">Dec</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          ratione.
        </div>

        <div class="event-timing">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Event-Calendar/master/images/time.png" alt="" /> 10:45 am
        </div>
      </div>
    </div>
    <div class="event">
      <div class="event-left">
        <div class="event-date">
          <div class="date">22</div>
          <div class="month">Dec</div>
        </div>
      </div>

      <div class="event-right">
        <h3 class="event-title">Some Title Here</h3>

        <div class="event-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          ratione.
        </div>

        <div class="event-timing">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Event-Calendar/master/images/time.png" alt="" /> 10:45 am
        </div>
      </div>
    </div>


  </div>
  )
}

export default Events