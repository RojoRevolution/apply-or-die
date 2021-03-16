import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const applications = atom({})

const searchAtom = atom("")
const filterStatus = atom({ 'status': "inactive", 'value': [] })




export { dbState, apiState, sideBarContent, applications, searchAtom, filterStatus };