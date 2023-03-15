import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import description from './index.html';
import './index.scss';

export const Description = () => {
  const descriptionElement = htmlToElement(description);
  const children = descriptionElement.querySelectorAll('.descriptionListItem');
  children[0].setHTML(localize(Localization['Unlimited documents']));
  children[1].setHTML(localize(Localization['Count mode']));
  children[2].setHTML(localize(Localization['Text recognition (OCR)']));
  console.log(descriptionElement, children);
  return descriptionElement;
};
