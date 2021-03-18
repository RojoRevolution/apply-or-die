import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const dbData = atom(["thisistext"])

const searchAtom = atom("")
const filterStatus = atom("")
const filterValue = atom("All")
const sortAtom = atom({
    click: "",
    sort: ""
})

const sideBarHide = atom("hide")
const sideBarShow = atom("show")

const loggedInStatus = atom(false)


export { dbState, apiState, sideBarContent, dbData, searchAtom, filterStatus, filterValue, sideBarHide, sideBarShow, sortAtom, loggedInStatus };