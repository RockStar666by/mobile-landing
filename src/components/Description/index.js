import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import description from './index.html';
import './index.scss';

export const Description = () => {
  const descriptionElement = htmlToElement(description);
  const children = descriptionElement.querySelectorAll('.descriptionListItem');
  children[0].innerHTML = localize(Localization['Unlimited documents']);
  children[1].innerHTML = localize(Localization['Count mode']);
  children[2].innerHTML = localize(Localization['Text recognition (OCR)']);

  return descriptionElement;
};
