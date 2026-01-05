/* @refresh reload */
import { render } from 'solid-js/web';
import './styles/main.scss';
import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
