import { htmlToElement } from '../../utils/htmlToElement';
import { Card } from '../Card/index';
import cardContainer from './index.html';
import './index.scss';

export const CardContainer = () => {
  const cardContainerElement = htmlToElement(cardContainer);
  cardContainerElement.append(Card({ period: 'monthly' }));
  cardContainerElement.append(Card({ period: 'annually', state: 'disabled' }));
  return cardContainerElement;
};
