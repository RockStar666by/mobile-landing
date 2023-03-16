import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import header from './index.html';
import './index.scss';

export const Header = () => {
  const headerElement = htmlToElement(header);
  const restoreButton = headerElement.querySelector('.restore');
  restoreButton.innerHTML = localize(Localization['Restore']);

  return headerElement;
};
