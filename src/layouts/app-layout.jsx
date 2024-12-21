import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen w-100% mr-auto ml-auto pr-8 pl-8">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout