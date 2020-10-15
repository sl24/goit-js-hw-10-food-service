import { menuMarkup, menuList, checkbox } from './js/markup';
import { Theme, onCheckboxClick, favoriteTheme } from './js/toggle';

menuList.insertAdjacentHTML('afterbegin', menuMarkup);

document.body.classList.add(Theme.LIGHT);
checkbox.addEventListener('change', onCheckboxClick);

favoriteTheme();
