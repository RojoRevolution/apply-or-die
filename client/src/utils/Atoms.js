import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const applications = atom({})

const searchAtom = atom("")




export { dbState, apiState, sideBarContent, applications, searchAtom };