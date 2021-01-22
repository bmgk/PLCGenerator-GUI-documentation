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
            'features/program blocks/safety/LAST_SK']        
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
