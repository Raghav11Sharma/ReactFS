import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.tsx';
import { Provider } from 'react-redux';
import { configureTheStore } from './store/store.ts';

const store = configureTheStore();

console.log("Hello raghav", store.getState());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>

    </Provider>
  </StrictMode>,
)
