import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import title from './index.html';
import './index.scss';

export const Title = () => {
  const titleElement = htmlToElement(title);
  titleElement.setHTML(
    localize(Localization['Unlimited Access<br>to All Features'])
  );
  console.log(titleElement);
  return titleElement;
};
