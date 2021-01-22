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
    Features: [
      {
        'Program Blocks':[
          {
            OB:['features/program blocks/ob/OB1'],
            Safety:['features/program blocks/safety/ARG',
            'features/program blocks/safety/SK',
            'features/program blocks/safety/NOT_HALT_ANTRIEBE',
            'features/program blocks/safety/LAST_SK'],
            POT:['features/program blocks/pot/POT'],      
            Grundfunktionen:['features/program blocks/grundfunktionen/Grundfunktionen'],     
            Vorwahlen:['features/program blocks/vorwahlen/Vorwahlen'],
            Betriebsarten:['features/program blocks/betriebsarten/Betriebsarten'],
            Stationen:['features/program blocks/stationen/Stationen'],
            Roboter:['features/program blocks/roboter/Roboter'],
            Schnittstellen:['features/program blocks/schnittstellen/Schnittstellen'],
          }
        ],
        Tags:[
          {
            Communication:['features/tags/communication/Communication'],
            Inverters:['features/tags/inverters/Inverters'],
            Robots:['features/tags/robots/Robots'],
            Sick:['features/tags/sick/Sick']
          }
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
        Stations:['configuration/stations/Fertigmeldung'],
        Inverters:['configuration/inverters/Controller',
          'configuration/inverters/Technology',
          'configuration/inverters/PositionSensor'],
        Sensors:['configuration/sensors/Part'],
      }
    ]
  },
};
