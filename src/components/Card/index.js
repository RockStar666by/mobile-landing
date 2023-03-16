import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import { store } from '../../store/store';
import card from './index.html';
import './index.scss';
import i18next from 'i18next';

export const Card = ({ period, state, link }) => {
  const cardElement = htmlToElement(card);
  cardElement.classList.add(period);
  state ? cardElement.classList.add(state) : null;

  cardElement.addEventListener('click', () => {
    const cards = document.body.querySelectorAll('#card');
    cards.forEach((card) => card.classList.add('disabled'));
    cardElement.classList.remove('disabled');
    store.setLink(link);
  });

  const percentage = cardElement.querySelector('.percentage');
  const cardTitle = cardElement.querySelector('.cardTitle');
  const price = cardElement.querySelector('.price');
  const description = cardElement.querySelector('.description');
  const pricePerMonth = cardElement.querySelector('.pricePerMonth');

  if (['fr'].includes(i18next.language)) {
    cardTitle.style.fontSize = '14px';
    description.style.fontSize = '13px';
  }

  if (cardElement.classList.contains('monthly')) {
    cardTitle.innerHTML = localize(Localization['Monthly']);
    price.innerHTML = localize('<strong>{{price}}</strong><br>per month', {
      price: '$9.99',
    });
    description.innerHTML = localize(Localization['3 DAYS FREE']);
    pricePerMonth.innerHTML = localize('{{price}}/month', { price: '$9.99' });
  } else {
    percentage.innerHTML = localize(Localization['-83%']);
    percentage.classList.add('visible');
    cardTitle.innerHTML = localize(Localization['Annually']);
    price.innerHTML = localize('<strong>{{price}}</strong><br>per year', {
      price: '$19.99',
    });
    description.innerHTML = localize(Localization['MOST POPULAR']);
    pricePerMonth.innerHTML = localize('{{price}}/month', { price: '$1.66' });
  }

  return cardElement;
};
