import { Buoy } from './buoy.model';

export const MOCKBUOYS: Buoy[] = [
  // =========== MDPE NAVIGATION BUOYS ============
  {
    id: '1',
    model: 'PMB1250RM',
    type: 'MDPE Navigation Buoy',
    imageUrl: 'assets/images/buoys/pmb1250rm.png',
    datasheetUrl: 'https://www.automaticpower.com/images/datasheets/PMB_1250_RM_Navigation_Buoy_R7.pdf',
    diameter: '1250 mm',
    overallHeight: '3150 mm',
    focalPlaneHeight: '1750 mm',
    grossBuoyancy: '650 kg'
  },
  {
    id: '2',
    model: 'PMB1800RM',
    type: 'MDPE Navigation Buoy',
    imageUrl: 'assets/images/buoys/pmb1800rm.png',
    datasheetUrl: 'https://www.automaticpower.com/images/datasheets/PMB_1800_RM_Navigation_Buoy_R7.pdf',
    diameter: '1800 mm',
    overallHeight: '4600 mm',
    focalPlaneHeight: '3100 mm',
    grossBuoyancy: '2300 kg'
  },
  {
    id: '3',
    model: 'PMB2400RM',
    type: 'MDPE Navigation Buoy',
    imageUrl: 'assets/images/buoys/pmb2400rm.png',
    datasheetUrl: 'https://www.automaticpower.com/images/datasheets/PMB_2400_RM_Navigation_Buoy_R7.pdf',
    diameter: '2400 mm',
    overallHeight: '6100 mm',
    focalPlaneHeight: '4100 mm',
    grossBuoyancy: '4450 kg'
  },
  {
    id: '4',
    model: 'PMB3000RM',
    type: 'MDPE Navigation Buoy',
    imageUrl: 'assets/images/buoys/pmb3000rm.png',
    datasheetUrl: 'https://www.automaticpower.com/images/datasheets/PMB_3000_RM_Navigation_Buoy_R7.pdf',
    diameter: '3000 mm',
    overallHeight: '7600 mm',
    focalPlaneHeight: '5000 mm',
    grossBuoyancy: '6920 kg'
  },
  {
    id: '5',
    model: 'PMB3600RM',
    type: 'MDPE Navigation Buoy',
    imageUrl: 'assets/images/buoys/pmb3600rm.png',
    datasheetUrl: 'https://www.automaticpower.com/images/datasheets/PMB_3600_RM_Navigation_Buoy_R7.pdf',
    diameter: '3600 mm',
    overallHeight: '8300 mm',
    focalPlaneHeight: '5000 mm',
    grossBuoyancy: '9500 kg'
  },

  // ============ STEEL NAVIGATION BUOYS ==============
  {
    id: '6',
    model: 'BL-511',
    type: 'Steel Navigation Buoy',
    imageUrl: 'assets/images/buoys/bl-511.png',
    datasheetUrl: 'https://www.automaticpower.com/data-sheets/BL-511-BUOY-022014A.pdf',
    diameter: '5\' 0" (1.52m)',
    overallHeight: '13\' 7" (4.14m)',
    focalPlaneHeight: '6\' 10" (2.08m)',
    grossBuoyancy: '3,850 lbs (1,746 kg)'
  },
  {
    id: '7',
    model: 'BL-620',
    type: 'Steel Navigation Buoy',
    imageUrl: 'assets/images/buoys/bl-620.png',
    datasheetUrl: 'https://www.automaticpower.com/data-sheets/BL-620-BUOY-080117D.pdf',
    diameter: '6\' 0" (1.83m)',
    overallHeight: '20\' 2" (6.15m)',
    focalPlaneHeight: '11\' 1" (3.38m)',
    grossBuoyancy: '7,000 lbs (3,175 kg)'
  },
  {
    id: '8',
    model: 'BL-717',
    type: 'Steel Navigation Buoy',
    imageUrl: 'assets/images/buoys/bl-717.png',
    datasheetUrl: 'https://www.automaticpower.com/data-sheets/BL-717-BUOY-120214C.pdf',
    diameter: '7\' 0" (2.13m)',
    overallHeight: '17\' 2" (5.23m)',
    focalPlaneHeight: '11\' 8" (3.60m)',
    grossBuoyancy: '7,810 lbs (3,543 kg)'
  },
  {
    id: '9',
    model: 'BL-826',
    type: 'Steel Navigation Buoy',
    imageUrl: 'assets/images/buoys/bl-826.png',
    datasheetUrl: 'https://www.automaticpower.com/data-sheets/BL-826-BUOY-120214C.pdf',
    diameter: '8\' 0" (2.44m)',
    overallHeight: '26\' 0" (7.92m)',
    focalPlaneHeight: '15\' 3" (4.65m)',
    grossBuoyancy: '8,378 lbs (3,800 kg)'
  }
];