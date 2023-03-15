import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import { Container } from './components/Container/index';
import './index.scss';

const root = document.getElementById('root');
root.append(Header(), Container(), Footer());
