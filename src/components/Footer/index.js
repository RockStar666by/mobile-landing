import { htmlToElement } from '../../utils/htmlToElement';
import { localize, Localization } from '../../localization/i18n';
import footer from './index.html';
import './index.scss';

export const Footer = () => {
  const footerElement = htmlToElement(footer);
  const autoRenewable = footerElement.querySelector('.autoRenewable');
  const terms = footerElement.querySelector('.termsOfUse');
  const privacy = footerElement.querySelector('.privacyPolicy');

  autoRenewable.setHTML(
    localize(Localization['Auto-renewable. Cancel anytime.'])
  );
  terms.setHTML(localize(Localization['Terms of Use']));
  privacy.setHTML(localize(Localization['Privacy Policy']));

  return footerElement;
};
