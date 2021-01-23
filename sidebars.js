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
        Robots:['configuration/robots/Fertigmeldung',
        'configuration/robots/Inverter',
        'configuration/robots/StellungFreigabe',
        'configuration/robots/Tools',
        'configuration/robots/WerkzeugFreigabe'],
        Safety:['configuration/safety/MobilePanel',
        'configuration/safety/RollGate'],
        Stations:['configuration/stations/Fertigmeldung',
          {
            Inverters:['configuration/inverters/Controller',
            'configuration/inverters/Technology',
            'configuration/inverters/PositionSensor'],
            Sensors:['configuration/sensors/Part'],
          }
        ]       
      }
    ],
    SpsMatrix:[
      'spsMatrix/Tools',
      'spsMatrix/Fertigmeldung',
      'spsMatrix/Interlock',
      'spsMatrix/StellungFreigabe',
      'spsMatrix/WerkzeugFreigabe'
    ]
  },
};
