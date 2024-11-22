const regionDataObject = [
  {
    "id": "western",
    "name": "Western",
    "code": "WR",
    "population": {
      "total": 2060585,
      "age_group": { "child": 709467, "youth_adult": 1280961, "elderly": 70157 },
      "urban": 1062865,
      "rural": 997720,
      "land_area": 13842.38097
    },
    "jobs": {
      "unemployment_rate": 14.6,
      "employment_sector_distribution": {
        "public": 50685,
        "semi_public": 3741,
        "private_formal": 103997,
        "private_informal": 531592,
        "local_ngo_cso": 29,
        "intl_ngo_cso": 35,
        "religious_org_local": 1098,
        "religious_org_intl": 129,
        "intl_org": 163
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 1072,
      "facility_breakdown": { "hospital": 275, "clinic": 448, "polyclinic": 33, "chps_compound": 316 },
      "maternity_homes": 53
    }
  },
  {
    "id": "central",
    "name": "Central",
    "code": "CR",
    "population": {
      "total": 2859821,
      "age_group": { "child": 1005108, "youth_adult": 1722037, "elderly": 132676 },
      "urban": 1654703,
      "rural": 1205118,
      "land_area": 9826
    },
    "jobs": {
      "unemployment_rate": 13.3,
      "employment_sector_distribution": {
        "public": 78805,
        "semi_public": 4170,
        "private_formal": 99155,
        "private_informal": 765690,
        "local_ngo_cso": 48,
        "intl_ngo_cso": 43,
        "religious_org_local": 1678,
        "religious_org_intl": 170,
        "intl_org": 235
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 1262,
      "facility_breakdown": { "hospital": 351, "clinic": 453, "polyclinic": 56, "chps_compound": 402 },
      "maternity_homes": 80
    }
  },
  {
    "id": "greater_accra",
    "name": "Greater Accra",
    "code": "GAR",
    "population": {
      "total": 5455692,
      "age_group": { "child": 1637592, "youth_adult": 3627065, "elderly": 191035 },
      "urban": 5001141,
      "rural": 454551,
      "land_area": 3245
    },
    "jobs": {
      "unemployment_rate": 12.9,
      "employment_sector_distribution": {
        "public": 185698,
        "semi_public": 17550,
        "private_formal": 515514,
        "private_informal": 1387796,
        "local_ngo_cso": 179,
        "intl_ngo_cso": 248,
        "religious_org_local": 5678,
        "religious_org_intl": 536,
        "intl_org": 1681
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 2019,
      "facility_breakdown": { "hospital": 637, "clinic": 1135, "polyclinic": 149, "chps_compound": 98 },
      "maternity_homes": 126
    }
  },
  {
    "id": "volta",
    "name": "Volta",
    "code": "VR",
    "population": {
      "total": 1659040,
      "age_group": { "child": 562588, "youth_adult": 983957, "elderly": 112495 },
      "urban": 698329,
      "rural": 960711,
      "land_area": 9504
    },
    "jobs": {
      "unemployment_rate": 13.8,
      "employment_sector_distribution": {
        "public": 53277,
        "semi_public": 1299,
        "private_formal": 41235,
        "private_informal": 421871,
        "local_ngo_cso": 34,
        "intl_ngo_cso": 24,
        "religious_org_local": 950,
        "religious_org_intl": 107,
        "intl_org": 137
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 960,
      "facility_breakdown": { "hospital": 312, "clinic": 391, "polyclinic": 18, "chps_compound": 239 },
      "maternity_homes": 49
    }
  },
  {
    "id": "eastern",
    "name": "Eastern",
    "code": "ER",
    "population": {
      "total": 2925653,
      "age_group": { "child": 985488, "youth_adult": 1773355, "elderly": 166810 },
      "urban": 1505820,
      "rural": 1419833,
      "land_area": 19323
    },
    "jobs": {
      "unemployment_rate": 11.8,
      "employment_sector_distribution": {
        "public": 92315,
        "semi_public": 3346,
        "private_formal": 101036,
        "private_informal": 815820,
        "local_ngo_cso": 31,
        "intl_ngo_cso": 35,
        "religious_org_local": 1987,
        "religious_org_intl": 86,
        "intl_org": 193
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 1463,
      "facility_breakdown": { "hospital": 354, "clinic": 548, "polyclinic": 27, "chps_compound": 534 },
      "maternity_homes": 54
    }
  },
  {
    "id": "ashanti",
    "name": "Ashanti",
    "code": "AR",
    "population": {
      "total": 5440463,
      "age_group": { "child": 1879063, "youth_adult": 3340806, "elderly": 220594 },
      "urban": 3353850,
      "rural": 2086613,
      "land_area": 24389
    },
    "jobs": {
      "unemployment_rate": 13.1,
      "employment_sector_distribution": {
        "public": 167024,
        "semi_public": 5534,
        "private_formal": 220782,
        "private_informal": 1426695,
        "local_ngo_cso": 50,
        "intl_ngo_cso": 51,
        "religious_org_local": 4162,
        "religious_org_intl": 298,
        "intl_org": 356
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 2004,
      "facility_breakdown": { "hospital": 792, "clinic": 849, "polyclinic": 51, "chps_compound": 312 },
      "maternity_homes": 146
    }
  },
  {
    "id": "western_north",
    "name": "Western North",
    "code": "WNR",
    "population": {
      "total": 880921,
      "age_group": { "child": 318342, "youth_adult": 535371, "elderly": 27208 },
      "urban": 262428,
      "rural": 618493,
      "land_area": 10079
    },
    "jobs": {
      "unemployment_rate": 13.1,
      "employment_sector_distribution": {
        "public": 22381,
        "semi_public": 1536,
        "private_formal": 25127,
        "private_informal": 254011,
        "local_ngo_cso": 5,
        "intl_ngo_cso": 5,
        "religious_org_local": 348,
        "religious_org_intl": 31,
        "intl_org": 48
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 486,
      "facility_breakdown": { "hospital": 81, "clinic": 187, "polyclinic": 8, "chps_compound": 210 },
      "maternity_homes": 45
    }
  },
  {
    "id": "ahafo",
    "name": "Ahafo",
    "code": "AHR",
    "population": {
      "total": 564668,
      "age_group": { "child": 203654, "youth_adult": 337981, "elderly": 23033 },
      "urban": 274914,
      "rural": 289754,
      "land_area": 5196
    },
    "jobs": {
      "unemployment_rate": 11.9,
      "employment_sector_distribution": {
        "public": 19435,
        "semi_public": 744,
        "private_formal": 17966,
        "private_informal": 152270,
        "local_ngo_cso": 9,
        "intl_ngo_cso": 4,
        "religious_org_local": 220,
        "religious_org_intl": 26,
        "intl_org": 51
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 233,
      "facility_breakdown": { "hospital": 78, "clinic": 65, "polyclinic": 5, "chps_compound": 85 },
      "maternity_homes": 22
    }
  },
  {
    "id": "bono",
    "name": "Bono",
    "code": "BR",
    "population": {
      "total": 1208649,
      "age_group": { "child": 413642, "youth_adult": 740593, "elderly": 54414 },
      "urban": 708481,
      "rural": 500168,
      "land_area": 11113
    },
    "jobs": {
      "unemployment_rate": 13.8,
      "employment_sector_distribution": {
        "public": 44774,
        "semi_public": 1218,
        "private_formal": 31348,
        "private_informal": 315824,
        "local_ngo_cso": 6,
        "intl_ngo_cso": 13,
        "religious_org_local": 722,
        "religious_org_intl": 82,
        "intl_org": 95
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 597,
      "facility_breakdown": { "hospital": 188, "clinic": 270, "polyclinic": 4, "chps_compound": 135 },
      "maternity_homes": 40
    }
  },
  {
    "id": "bono_east",
    "name": "Bono East",
    "code": "BER",
    "population": {
      "total": 1203400,
      "age_group": { "child": 460343, "youth_adult": 699886, "elderly": 43171 },
      "urban": 633255,
      "rural": 570145,
      "land_area": 23248.28
    },
    "jobs": {
      "unemployment_rate": 11.2,
      "employment_sector_distribution": {
        "public": 29747,
        "semi_public": 683,
        "private_formal": 26921,
        "private_informal": 345077,
        "local_ngo_cso": 11,
        "intl_ngo_cso": 26,
        "religious_org_local": 389,
        "religious_org_intl": 61,
        "intl_org": 39
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 480,
      "facility_breakdown": { "hospital": 158, "clinic": 166, "polyclinic": 10, "chps_compound": 146 },
      "maternity_homes": 32
    }
  },
  {
    "id": "oti",
    "name": "Oti",
    "code": "OR",
    "population": {
      "total": 747248,
      "age_group": { "child": 299771, "youth_adult": 415316, "elderly": 32161 },
      "urban": 243869,
      "rural": 503379,
      "land_area": 11066
    },
    "jobs": {
      "unemployment_rate": 6.7,
      "employment_sector_distribution": {
        "public": 16705,
        "semi_public": 269,
        "private_formal": 12312,
        "private_informal": 230588,
        "local_ngo_cso": 7,
        "intl_ngo_cso": 4,
        "religious_org_local": 177,
        "religious_org_intl": 37,
        "intl_org": 30
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 400,
      "facility_breakdown": { "hospital": 82, "clinic": 139, "polyclinic": 13, "chps_compound": 166 },
      "maternity_homes": 21
    }
  },
  {
    "id": "northern",
    "name": "Northern",
    "code": "NR",
    "population": {
      "total": 2310928,
      "age_group": { "child": 1011683, "youth_adult": 1225333, "elderly": 73912 },
      "urban": 1095808,
      "rural": 1215120,
      "land_area": 26524
    },
    "jobs": {
      "unemployment_rate": 14.3,
      "employment_sector_distribution": {
        "public": 52623,
        "semi_public": 1021,
        "private_formal": 32602,
        "private_informal": 491240,
        "local_ngo_cso": 68,
        "intl_ngo_cso": 47,
        "religious_org_local": 244,
        "religious_org_intl": 27,
        "intl_org": 90
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 808,
      "facility_breakdown": { "hospital": 212, "clinic": 303, "polyclinic": 26, "chps_compound": 267 },
      "maternity_homes": 34
    }
  },
  {
    "id": "savannah",
    "name": "Savannah",
    "code": "SR",
    "population": {
      "total": 653277,
      "age_group": { "child": 276219, "youth_adult": 355633, "elderly": 21425 },
      "urban": 193579,
      "rural": 459698,
      "land_area": 34790
    },
    "jobs": {
      "unemployment_rate": 22.4,
      "employment_sector_distribution": {
        "public": 8787,
        "semi_public": 152,
        "private_formal": 6132,
        "private_informal": 122172,
        "local_ngo_cso": 0,
        "intl_ngo_cso": 4,
        "religious_org_local": 86,
        "religious_org_intl": 19,
        "intl_org": 15
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 286,
      "facility_breakdown": { "hospital": 41, "clinic": 106, "polyclinic": 19, "chps_compound": 120 },
      "maternity_homes": 12
    }
  },
  {
    "id": "north_east",
    "name": "North East",
    "code": "NER",
    "population": {
      "total": 658946,
      "age_group": { "child": 296448, "youth_adult": 338678, "elderly": 23820 },
      "urban": 214946,
      "rural": 444000,
      "land_area": 9070
    },
    "jobs": {
      "unemployment_rate": 20.7,
      "employment_sector_distribution": {
        "public": 9553,
        "semi_public": 171,
        "private_formal": 5123,
        "private_informal": 110615,
        "local_ngo_cso": 5,
        "intl_ngo_cso": 5,
        "religious_org_local": 42,
        "religious_org_intl": 5,
        "intl_org": 5
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 239,
      "facility_breakdown": { "hospital": 32, "clinic": 97, "polyclinic": 6, "chps_compound": 104 },
      "maternity_homes": 15
    }
  },
  {
    "id": "upper_east",
    "name": "Upper East",
    "code": "UER",
    "population": {
      "total": 1301226,
      "age_group": { "child": 489296, "youth_adult": 730360, "elderly": 81570 },
      "urban": 330258,
      "rural": 970968,
      "land_area": 8842
    },
    "jobs": {
      "unemployment_rate": 21.1,
      "employment_sector_distribution": {
        "public": 34334,
        "semi_public": 541,
        "private_formal": 19275,
        "private_informal": 213874,
        "local_ngo_cso": 35,
        "intl_ngo_cso": 33,
        "religious_org_local": 159,
        "religious_org_intl": 17,
        "intl_org": 81
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 799,
      "facility_breakdown": { "hospital": 121, "clinic": 284, "polyclinic": 10, "chps_compound": 384 },
      "maternity_homes": 37
    }
  },
  {
    "id": "upper_west",
    "name": "Upper West",
    "code": "UWR",
    "population": {
      "total": 901502,
      "age_group": { "child": 341749, "youth_adult": 511689, "elderly": 48064 },
      "urban": 238284,
      "rural": 663218,
      "land_area": 18476
    },
    "jobs": {
      "unemployment_rate": 14.4,
      "employment_sector_distribution": {
        "public": 26409,
        "semi_public": 422,
        "private_formal": 11365,
        "private_informal": 176161,
        "local_ngo_cso": 16,
        "intl_ngo_cso": 22,
        "religious_org_local": 98,
        "religious_org_intl": 34,
        "intl_org": 48
      }
    },
    "health": {
      "distance_to_facility": 5,
      "num_facilities": 815,
      "facility_breakdown": { "hospital": 197, "clinic": 256, "polyclinic": 34, "chps_compound": 328 },
      "maternity_homes": 68
    }
  }
];

const regionNames = [
    "western",
    "central",
    "greater_accra",
    "volta",
    "eastern",
    "ashanti",
    "western_north",
    "ahafo",
    "bono",
    "bono_east",
    "oti",
    "northern",
    "savannah",
    "north_east",
    "upper_east",
    "upper_west"
  ]

const popByAgegroup = [
  // ["region", "distance", "num_of_facilities", ""hospital"", "clinic", ""polyclinic"", ""chps_compound""],
  // ["Region",""Hospital"",""Polyclinic"","Clinic",""CHPS_Compound"",""Health" Facility","Maternity_Home","Land area(sq KM)"]
  ["western","275","33","448","316","1072","53","13842.38097"],
  ["central","351","56","453","402","1262","80","9826"],
  ["greater_accra","637","149","1135","98","2019","126","3245"],
  ["volta","312","18","391","239","960","49","9504"],
  ["eastern","354","27","548","534","1463","54","19323"],
  ["ashanti","792","51","849","312","2004","146","24389"],
  ["western_north","81","8","187","210","486","45","10079"],
  ["ahafo","78","5","65","85","233","22","5196"],
  ["bono","188","4","270","135","597","40","11113"],
  ["bono_east","158","10","166","146","480","32","23248.28"],
  ["oti","82","13","139","166","400","21","11066"],
  ["northern","212","26","303","267","808","34","26524"],
  ["savannah","41","19","106","120","286","12","34790"],
  ["north_east","32","6","97","104","239","15","9070"],
  ["upper_east","121","10","284","384","799","37","8842"],
  ["upper_west","197","34","256","328","815","68","18476"]
]
  
  module.exports = {
    regionNames,
    regionDataObject,
    popByAgegroup
  }