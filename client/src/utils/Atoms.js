import { atom } from 'jotai'

const dbState = atom({})
const apiState = atom({})
const sideBarContent = atom("/")



export { dbState, apiState, sideBarContent };