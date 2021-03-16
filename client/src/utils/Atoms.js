import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")
const applications = atom({})




export { dbState, apiState, sideBarContent, applications };