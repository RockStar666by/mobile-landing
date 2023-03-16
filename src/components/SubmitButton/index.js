import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import { store } from '../../store/store';
import button from './index.html';
import './index.scss';

export const SubmitButton = () => {
  const submitButtonElement = htmlToElement(button);
  submitButtonElement.addEventListener(
    'click',
    () => (window.location.href = `${store.link}`)
  );
  submitButtonElement.innerHTML = localize(Localization['Continue']);
  return submitButtonElement;
};
