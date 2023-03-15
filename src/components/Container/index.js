import { htmlToElement } from '../../utils/htmlToElement';
import { Title } from '../Title/index';
import { Description } from '../Description/index';
import { CardContainer } from '../CardContainer/index';
import { SubmitButton } from '../SubmitButton/index';
import container from './index.html';
import './index.scss';

export const Container = () => {
  const containerElement = htmlToElement(container);
  containerElement.append(
    Title(),
    Description(),
    CardContainer(),
    SubmitButton()
  );
  return containerElement;
};
