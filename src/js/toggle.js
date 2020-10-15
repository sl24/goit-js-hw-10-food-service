import { checkbox } from './markup';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onCheckboxClick = function (evt) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', document.body.classList.value);
};

const favoriteTheme = function (evt) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(`${savedTheme}`);
  }
  if (savedTheme === Theme.DARK) {
    checkbox.checked = true;
  }
};

export { Theme, onCheckboxClick, favoriteTheme };
