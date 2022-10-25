import React from "react"

export interface AppRoutes {
path:string
component:React.ComponentType
exact?:boolean
}

const Detail = React.lazy(()=>import("./pages/Details/Detail"))
const Home = React.lazy(()=>import("./pages/Home/Home"))

export const routes: AppRoutes[] = [
{component:Home,path:'/',exact:true},
{component:Detail,path:'/:country',exact:true},
]