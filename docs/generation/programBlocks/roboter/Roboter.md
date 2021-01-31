---
id: Roboter
title: Roboter
---

The generator prepares the entire "FC" structure, but only the configurable items will be described.

## Fertigmeldung

Standard "FB_Rob_FM" call is always generated, but after filling [Robot Fm Parameter](../../../configuration/robots/Fertigmeldung)
will  be added:

status logic

![img](../../../../assets/docs/generation/programBlocks/roboter/LogicFm.jpg)


and comment to Robot db.

![img](../../../../assets/docs/generation/programBlocks/roboter/Fertigmeldung.jpg)

---

## Interlock

After filling in the [Interlock Parameter](../../../configuration/robots/Interlock) field. A block call will be generated with the position assigned to the robots.

![img](../../../../assets/docs/generation/programBlocks/roboter/Interlock.jpg)

In network comment is generated list of robot with index.

:::note
Generator also work with external interlocks between plcs.
:::

---

## StellungFreigabe

For each configured [Stellung Freigabe](../../../configuration/robots/StellungFreigabe). 
A network for manual filling will be prepared.

![img](../../../../assets/docs/generation/programBlocks/roboter/StellungFreigabe.jpg)

---

## WerkzeugFreigabe

The block is generated always, but when [Werkzeug Freigabe](../../../configuration/robots/WerkzeugFreigabe).
will be defined. Cfg and frg connection will be generated.

![img](../../../../assets/docs/generation/programBlocks/roboter/WerkzeugFreigabe.jpg)

---

## Tool

For each configured [Tools](../../../configuration/robots/Tools) will be created block of service.

![img](../../../../assets/docs/generation/programBlocks/roboter/Tool.jpg)

---