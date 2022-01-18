import './style.css';
import { numberStore, numberSessionStore } from './store';
import { setDefaultStorageName, getDefaultStorageName } from './app';

setDefaultStorageName('satha-store-1');

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Test</h1>

  storageName: <span>${getDefaultStorageName()}</span> </br>
  localStorage: <span id="update-1">${numberStore.get()}</span> </br>
  sessionStorage: <span id="update-2">${numberSessionStore.get()}</span> </br> </br>
  <button id="decrement" style="margin-right: 10px">-</span>
  <button id="increment">+</span>
`;

const updateSpan = app.querySelector('#update-1');
const updateSpan2 = app.querySelector('#update-2');
const increment = app.querySelector('#increment');
const decrement = app.querySelector('#decrement');

increment.addEventListener('click', (e) => {
  e.preventDefault();

  numberStore.set((state: number) => state + 1);
  numberSessionStore.set((state: number) => state + 1);
});

decrement.addEventListener('click', (e) => {
  e.preventDefault();

  numberStore.set((state: number) => state - 1);
  numberSessionStore.set((state: number) => state - 1);
});

const numberStoreSubscribe = numberStore.subscribe((state: number) => {
  updateSpan.innerHTML = `${state}`;
});

const numberSessionStoreSubscribe = numberSessionStore.subscribe((state: number) => {
  updateSpan2.innerHTML = `${state}`;
});

window.onunload = function () {
  numberStore.unsubscribe(numberStoreSubscribe);
  numberSessionStore.unsubscribe(numberSessionStoreSubscribe);
};
