import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import card from './index.html';
import './index.scss';

export const Card = ({ period, state, link }) => {
  const cardElement = htmlToElement(card);
  cardElement.classList.add(period);
  state ? cardElement.classList.add(state) : null;
  cardElement.addEventListener('click', () => {
    const cards = document.body.querySelectorAll('#card');
    console.log(cards);
    cards.forEach((card) => card.classList.add('disabled'));
    cardElement.classList.remove('disabled');
  });
  const percentage = cardElement.querySelector('.percentage');
  const cardTitle = cardElement.querySelector('.cardTitle');
  const price = cardElement.querySelector('.price');
  const description = cardElement.querySelector('.description');
  const pricePerMonth = cardElement.querySelector('.pricePerMonth');
  if (cardElement.classList.contains('monthly')) {
    cardTitle.setHTML(localize(Localization['Monthly']));
    price.setHTML(
      localize('<strong>{{price}}</strong><br>per month', { price: '$9.99' })
    );
    description.setHTML(localize(Localization['3 DAYS FREE']));
    pricePerMonth.setHTML(localize('{{price}}/month', { price: '$9.99' }));
  } else {
    percentage.setHTML(localize(Localization['-83%']));
    percentage.classList.add('visible');
    cardTitle.setHTML(localize(Localization['Annually']));
    price.setHTML(
      localize('<strong>{{price}}</strong><br>per year', { price: '$19.99' })
    );
    description.setHTML(localize(Localization['MOST POPULAR']));
    pricePerMonth.setHTML(localize('{{price}}/month', { price: '$1.66' }));
  }
  return cardElement;
};
