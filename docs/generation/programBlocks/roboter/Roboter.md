---
id: Roboter
title: Roboter
---

Generator prepared all 'FC' structure, but there will be described only configurable elements.

## Fertigmeldung

Standard call for 'FB_Rob_FM' is generated always, but when you fill [Robot Fm Parameter](../../../configuration/robots/Fertigmeldung)
There also add logic for status

![img](../../../../assets/docs/generation/programBlocks/roboter/LogicFm.jpg)


and comment to Robot db.

![img](../../../../assets/docs/generation/programBlocks/roboter/Fertigmeldung.jpg)

---

## Interlock

When you fill [Interlock Parameter](../../../configuration/robots/Interlock). Will be generated block call with assigned position to robots.

![img](../../../../assets/docs/generation/programBlocks/roboter/Interlock.jpg)

In network comment is generated list of robot with index.

:::note
Generator also work with external interlocks betwen plcs.
:::

---

## StellungFreigabe

For each configured [element](../../../configuration/robots/StellungFreigabe). 
Will be prepared network for hand fill.

![img](../../../../assets/docs/generation/programBlocks/roboter/StellungFreigabe.jpg)

---

## WerkzeugFreigabe

Block is generated always, but when [WerkzeugFreigabe Parameter](../../../configuration/robots/WerkzeugFreigabe).
Is defined, cfg will be generate and frg will be connected.

![img](../../../../assets/docs/generation/programBlocks/roboter/WerkzeugFreigabe.jpg)

---

## Tool

For each configured [Tools](../../../configuration/robots/Tools) will be create block fo service.

![img](../../../../assets/docs/generation/programBlocks/roboter/Tool.jpg)

---