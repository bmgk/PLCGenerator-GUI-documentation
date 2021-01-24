/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    Docusaurus: ['doc1'],
    Generation: [
      {
        'Program Blocks':[
          {
            OB:['generation/programBlocks/ob/OB1'],
            Safety:['generation/programBlocks/safety/ARG',
            'generation/programBlocks/safety/SK',
            'generation/programBlocks/safety/NOT_HALT_ANTRIEBE',
            'generation/programBlocks/safety/LAST_SK'],
            POT:['generation/programBlocks/pot/POT'],      
            Grundfunktionen:['generation/programBlocks/grundfunktionen/Grundfunktionen'],     
            Vorwahlen:['generation/programBlocks/vorwahlen/Vorwahlen'],
            Betriebsarten:['generation/programBlocks/betriebsarten/Betriebsarten'],
            Stationen:['generation/programBlocks/stationen/Stationen'],
            Roboter:['generation/programBlocks/roboter/Roboter'],
            Schnittstellen:['generation/programBlocks/schnittstellen/Schnittstellen'],
          }
        ],
        Tags:['generation/tags/Communication',
        'generation/tags/Inverters',
        'generation/tags/Robots',
        'generation/tags/Sick'
        ]
      }
    ],
    Configuration: [
      {
        PLC:['configuration/plc/Communication'],
        Safety:['configuration/safety/MobilePanel',
        'configuration/safety/RollGate'],
        Robots:['configuration/robots/Fertigmeldung',
        'configuration/robots/Interlock',
        'configuration/robots/Tools',
        'configuration/robots/StellungFreigabe',        
        'configuration/robots/WerkzeugFreigabe'],       
        Stations:['configuration/stations/Fertigmeldung',
          {
            Inverters:['configuration/stations/inverters/Controller',
            'configuration/stations/inverters/Technology',
            'configuration/stations/inverters/Position'],
            Sensors:['configuration/stations/sensors/Part'],
          }
        ]       
      }
    ],
    SpsMatrix:[
      'spsMatrix/Fertigmeldung',
      'spsMatrix/Interlock',
      'spsMatrix/Tools',
      'spsMatrix/StellungFreigabe',
      'spsMatrix/WerkzeugFreigabe'
    ]
  },
};
