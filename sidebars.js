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
            OB:['generation/program blocks/ob/OB1'],
            Safety:['generation/program blocks/safety/ARG',
            'generation/program blocks/safety/SK',
            'generation/program blocks/safety/NOT_HALT_ANTRIEBE',
            'generation/program blocks/safety/LAST_SK'],
            POT:['generation/program blocks/pot/POT'],      
            Grundfunktionen:['generation/program blocks/grundfunktionen/Grundfunktionen'],     
            Vorwahlen:['generation/program blocks/vorwahlen/Vorwahlen'],
            Betriebsarten:['generation/program blocks/betriebsarten/Betriebsarten'],
            Stationen:['generation/program blocks/stationen/Stationen'],
            Roboter:['generation/program blocks/roboter/Roboter'],
            Schnittstellen:['generation/program blocks/schnittstellen/Schnittstellen'],
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
