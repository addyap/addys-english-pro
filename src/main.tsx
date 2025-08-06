
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root")!;

if (import.meta.env.PROD) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
