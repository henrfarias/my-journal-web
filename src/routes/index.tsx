import { createBrowserRouter } from 'react-router-dom'
import JournalPage from '../pages/journal'
import { SignIn } from '../pages/login'
import { SignUp } from '../pages/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <JournalPage />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
])
