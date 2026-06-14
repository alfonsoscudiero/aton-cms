import { Project } from './project.model';

export const MOCKPROJECTS: Project[] = [
  new Project(
    '1',
    'Q-2024-001',
    'Amuay Harbor Navigation Upgrade',
    'Amuay',
    'Venezuela',
    '2024',
    'Supply and installation of eight 2.4-meter MDPE lateral buoys marking the approach channel to Amuay Harbor. Each buoy was equipped with SC36 self-contained marine lanterns to improve visibility and navigational safety for commercial vessel traffic.',
    ['7'], // SC36
    ['3']  // PMB2400RM
  ),

  new Project(
    '2',
    'A250862Dp',
    'Salina Cruz Safe Water Buoy Installation',
    'Salina Cruz',
    'Mexico',
    '2025',
    'Supply and installation of a 2.6-meter Safe Water Buoy at the entrance to Puerto de Salina Cruz. The buoy was equipped with a FA249 self-contained solar marine lantern with GPS synchronization for enhanced navigational safety and long-range visibility.',
    ['2'], // FA249
    ['3']  // closest buoy
  ),

  new Project(
    '3',
    'Q-2025-003',
    'Maracaibo Channel Modernization',
    'Maracaibo',
    'Venezuela',
    '2025',
    'Supply and installation of forty-one PMB2400RM 2.4-meter MDPE navigation buoys throughout the Maracaibo Channel. Each buoy was equipped with SC35 self-contained solar lanterns with AIS capability to improve vessel tracking, navigation safety, and channel visibility.',
    ['6'], // SC35
    ['3']  // PMB2400RM
  ),

  new Project(
    '4',
    'A260166',
    'Baja California Coastal Navigation System',
    'Baja California',
    'Mexico',
    '2025',
    'Supply and deployment of twenty-one MDPE navigation buoys along the Baja California coastline. The project included 2.4-meter and 3.0-meter plastic navigation buoys equipped with SC35 and SC12 marine lanterns to improve coastal navigation and maritime safety.',
    ['5', '6'], // SC12, SC35
    ['3', '4']  // PMB2400RM, PMB3000RM
  ),

  new Project(
    '5',
    'A250238-Rev1',
    'Cartagena Bay Cardinal Mark Installation',
    'Cartagena',
    'Colombia',
    '2025',
    'Supply and installation of one PMB2400RM 2.4-meter MDPE cardinal mark buoy for Cartagena Bay. The buoy was equipped with an SC37 self-contained solar marine lantern and configured according to IALA recommendations to improve navigational safety for vessels approaching the harbor.',
    ['8'], // SC37
    ['3']  // PMB2400RM
  )
];