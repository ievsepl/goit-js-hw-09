import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] > Date.now()) {
      refs.startBtn.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
  onChange() {
    startAgain();
  },
};
const refs = {
  timerFace: document.querySelector('.timer'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),

  fp: flatpickr('input#datetime-picker', options),
};

refs.startBtn.disabled = true;

refs.timerFace.style.color = 'blue';
refs.timerFace.style.display = 'flex';
refs.timerFace.style.gap = '30px';
refs.timerFace.style.justifyContent = 'center';
refs.timerFace.style.textAlign = 'center';
refs.timerFace.style.marginTop = '20px';
refs.timerFace.style.fontSize = '30px';
refs.timerFace.style.fontWeight = 'bold';

//==================================================================
// ===========================FUNCTION---------------------------
// =================================================================

// function onStartTimer() {
//   if (refs.fp.selectedDates[0] <= Date.now()) {
//     alert('Please choose a date in the future');
//   } else {
//     timer();
//   }
// }
// function timer() {
//   // let isActive= false,
//   //   if (isActive) {
//   //     return;
//   //   }

//   //   isActive = true;

//   let timerId = setInterval(() => {
//     const dateNow = Date.now();
//     const deltaTime = refs.fp.selectedDates[0] - dateNow;
//     const { days, hours, minutes, seconds } = convertMs(deltaTime);

//     console.log(deltaTime);
//     if (deltaTime <= 0) {
//       clearInterval(timerId);
//       return;
//     }
//     refs.days.textContent = addLeadingZero(days);
//     refs.hours.textContent = addLeadingZero(hours);
//     refs.minutes.textContent = addLeadingZero(minutes);
//     refs.seconds.textContent = addLeadingZero(seconds);
//   }, 1000);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
// //

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

//==================================================================
// ===========================CLASS---------------------------
//==================================================================
let timerId = null;
const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    refs.startBtn.disabled = true;

    timerId = setInterval(() => {
      const dateNow = Date.now();
      const deltaTime = refs.fp.selectedDates[0] - dateNow;
      const { days, hours, minutes, seconds } = this.convertMs(deltaTime);

      if (this.addLeadingZero(seconds) <= 0) {
        // clearInterval(timerId);
        this.stop();
      }

      refs.days.textContent = this.addLeadingZero(days);
      refs.hours.textContent = this.addLeadingZero(hours);
      refs.minutes.textContent = this.addLeadingZero(minutes);
      refs.seconds.textContent = this.addLeadingZero(seconds);
      // console.log(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(timerId);
    this.isActive = false;
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
};
refs.startBtn.addEventListener('click', timer.start.bind(timer));

// function onStartTimer() {
//   timer.start();
// }
function startAgain() {
  timer.stop();
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}
