import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] > Date.now()) {
      refs.startBtn.disabled = false;
    }
  },
};
const refs = {
  // inputData: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),

  fp: flatpickr('input#datetime-picker', options),
};

refs.startBtn.addEventListener('click', onStartTimer);
refs.startBtn.disabled = true;

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

const timer = {
  timerId: null,
  // deltaTime: null,
  // isActive: false,
  start() {
    //   if (this.isActive) {
    //     return;
    //   }

    //   this.isActive = true;
    refs.startBtn.disabled = true;

    let timerId = setInterval(() => {
      const dateNow = Date.now();
      const deltaTime = refs.fp.selectedDates[0] - dateNow;
      const { days, hours, minutes, seconds } = this.convertMs(deltaTime);

      if (this.addLeadingZero(seconds) <= 0) {
        clearInterval(timerId);
      }

      refs.days.textContent = this.addLeadingZero(days);
      refs.hours.textContent = this.addLeadingZero(hours);
      refs.minutes.textContent = this.addLeadingZero(minutes);
      refs.seconds.textContent = this.addLeadingZero(seconds);
      // console.log(deltaTime);
    }, 1000);
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
// if (refs.fp) {
//   refs.startBtn.disabled = false;
//   timer.start();
// }
// console.log(refs.fp.selectedDates[0] - Date.now());
function onStartTimer() {
  if (refs.fp.selectedDates[0] > Date.now()) {
    // refs.startBtn.disabled = false;
    timer.start();
  } else {
    alert('Please choose a date in the future');
  }
}
