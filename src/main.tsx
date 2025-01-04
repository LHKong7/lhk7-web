import { createRoot } from 'react-dom/client';

import './index.css';

import { RouterProvider, createRouter } from '@tanstack/react-router';

import { initLang } from './utils/init';

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

initLang();

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <RouterProvider router={router} />
  )
}
