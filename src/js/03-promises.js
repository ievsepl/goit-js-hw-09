import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form ');

form.addEventListener('submit', onStartCreate);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onStartCreate(e) {
  e.preventDefault();
  let increaseDelay = Number(form.delay.value);
  // let position = 0;
  for (position = 1; position <= form.amount.value; position += 1) {
    // if (position === 1) {
    //   increaseDelay;
    // } else {
    //   increaseDelay += Number(form.step.value);
    // }
    // console.log(increaseDelay);

    createPromise(position, increaseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    increaseDelay += Number(form.step.value);
  }
  e.currentTarget.reset();
}
