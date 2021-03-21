import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const dbData = atom([])

const searchAtom = atom("")
const activeBtn = atom("inactive")
const filterStatus = atom("")
const filterValue = atom("All")
const sortAtom = atom("")

const sideBarHide = atom("hide")
const sideBarShow = atom("show")

const loadDB = atom("")
const loggedInStatus = atom(false)


export { dbState, apiState, sideBarContent, dbData, searchAtom, activeBtn, filterStatus, filterValue, sideBarHide, sideBarShow, sortAtom, loadDB, loggedInStatus };