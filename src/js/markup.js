import menu from '../menu.json';
import menuTemplate from '../template.hbs';

const menuList = document.querySelector('.js-menu');
const checkbox = document.querySelector('.theme-switch__toggle');

const menuMarkup = menuTemplate(menu);

export { menuMarkup, menuList, checkbox };
