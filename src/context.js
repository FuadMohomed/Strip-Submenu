import React, { useState, useContext, Children } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
const [sidebarOpen, setSidebarOpen] = useState(false)  
const [submenuOpen, setSubmenuOpen] = useState(false) 
const [location, setLocation] = useState({}) 
const [page, setPage] = useState({page: '', links:[]})



const openSidebar = () => {
    setSidebarOpen(true)
}

const closeSidebar = () => {
    setSidebarOpen(false)
}
const openSubmenu = (text,coordinates) => {
    const page = sublinks.find((links)=> links.page === text)
    setPage(page)
    setSubmenuOpen(true)
    setLocation(coordinates)
}

const closeSubmenu = () => {
    setSubmenuOpen(false)
}

return <AppContext.Provider value={{
    sidebarOpen,
    submenuOpen,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
    location,
    page,
}}>
{children}
</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

