import React from 'react';
import {createRoot} from "react-dom/client";
import App from "./App";
import './second.css'

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('root not found')
}

new EventSource('/esbuild').addEventListener('change', () => location.reload())

const root = createRoot(rootElement);
root.render(<App/>);