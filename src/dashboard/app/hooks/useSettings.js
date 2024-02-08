import { useContext } from 'react'
import SettingsContext from 'dashboard/app/contexts/SettingsContext'

const useSettings = () => useContext(SettingsContext)

export default useSettings
