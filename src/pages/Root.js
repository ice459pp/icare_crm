import { Outlet } from "react-router-dom"
import MainNavigation from "../component/nav/MainNavigation"
import NavDrawer from "../component/nav/NavDrawer"

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <NavDrawer />
        <Outlet />
      </main>
    </>
  )
}

export default Root