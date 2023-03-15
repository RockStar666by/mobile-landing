import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import button from './index.html';
import './index.scss';

export const SubmitButton = (onClick = () => {}) => {
  const submitButtonElement = htmlToElement(button);
  submitButtonElement.addEventListener('click', onClick);
  submitButtonElement.setHTML(localize(Localization['Continue']));
  return submitButtonElement;
};
