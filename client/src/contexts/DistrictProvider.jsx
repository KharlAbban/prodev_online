import React, { createContext, useContext, useState } from 'react'

const DistrictContext = createContext(null);

export const useDistrictContext = () => {
  return useContext(DistrictContext);
}

const DistrictProvider = ({children}) => {
    const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <DistrictContext.Provider value={{selectedDistrict, setSelectedDistrict}}>
        {children}
    </DistrictContext.Provider>
  )
}

export default DistrictProvider