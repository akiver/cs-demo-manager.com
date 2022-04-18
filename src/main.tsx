import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './root';
import './scss/app.scss';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);
root.render(<Root />);
