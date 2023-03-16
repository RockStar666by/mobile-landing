import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import footer from './index.html';
import './index.scss';

export const Footer = () => {
  const footerElement = htmlToElement(footer);
  const autoRenewable = footerElement.querySelector('.autoRenewable');
  const terms = footerElement.querySelector('.termsOfUse');
  const privacy = footerElement.querySelector('.privacyPolicy');

  autoRenewable.innerHTML = localize(
    Localization['Auto-renewable. Cancel anytime.']
  );
  terms.innerHTML = localize(Localization['Terms of Use']);
  privacy.innerHTML = localize(Localization['Privacy Policy']);

  return footerElement;
};
