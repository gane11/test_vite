import {
  createRouter,
  RouterProvider,
  createRoute,
  createRootRoute,
  Link,
  Outlet,
} from '@tanstack/react-router'
import Home from '../Home'
import UploadResume from './users/index'
// import Layout from '../components/common/Layout'

const rootRoute = createRootRoute({
  component: () => (
    <>
      {/* <Layout /> */}
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/upload-resume' className='[&.active]:font-bold'>
          Upload resume
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

// Define child routes
const uploadResumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'upload-resume',
  component: () => <UploadResume />,
})

const routeTree = rootRoute.addChildren([indexRoute, uploadResumeRoute])

// Create router with route tree
const router = createRouter({ routeTree })

export default function AppRouter() {
  return <RouterProvider router={router} />
}
