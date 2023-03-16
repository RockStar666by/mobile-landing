import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import title from './index.html';
import './index.scss';
import i18next from 'i18next';

export const Title = () => {
  const titleElement = htmlToElement(title);
  titleElement.innerHTML = localize(
    Localization['Unlimited Access<br>to All Features']
  );

  if (['fr', 'es', 'ru'].includes(i18next.language)) {
    titleElement.style.fontSize = '28px';
  }

  console.log(i18next.language);

  return titleElement;
};
