import React, { createContext, useContext, useState } from 'react'

const RegionContext = createContext(null);

export const useRegionContext = () => {
  return useContext(RegionContext);
}

const RegionProvider = ({children}) => {
    const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <RegionContext.Provider value={{selectedRegion, setSelectedRegion}}>
        {children}
    </RegionContext.Provider>
  )
}

export default RegionProvider