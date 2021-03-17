import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const applications = atom({})

const searchAtom = atom("")
const filterStatus = atom("")
const filterValue = atom("")
const sortAtom = atom({
    click: "",
    sort: ""
})

const sideBarHide = atom("hide")
const sideBarShow = atom("show")




export { dbState, apiState, sideBarContent, applications, searchAtom, filterStatus, filterValue, sideBarHide, sideBarShow, sortAtom };