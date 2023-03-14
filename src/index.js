import './index.scss';
import { localize, Localization } from './localization/i18n';
console.log(Localization);

const header = document.createElement('h1');
header.innerHTML = localize('<strong>{{price}}</strong><br>per month', {
  price: 1000
});

document.body.append(header);
