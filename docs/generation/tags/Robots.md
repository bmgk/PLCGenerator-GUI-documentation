---
id: Robots
title: Robots
---

Symbols will be generated for all robots in the order by name, taking into account parameter configuration.

## Interlock

If [Interlock Parameter](../../configuration/robots/Interlock) is configured.
In symbols comment will be set information about collision robot.


![img](../../../assets/docs/generation/tags/Roboterverriegelung.jpg)

![img](../../../assets/docs/generation/tags/AnfordVerriegelung.jpg)
---

## Werkzeugfreigabe

Tags between 57-80 will be prepared according 'Freigabe' parameters.

[Werkzeugfreigabe](../../configuration/robots/Werkzeugfreigabe)
![img](../../../assets/docs/generation/tags/Werkzeugfreigabe.jpg)

[Stellungfreigabe](../../configuration/robots/Stellungfreigabe)
![img](../../../assets/docs/generation/tags/Stellungfreigabe.jpg)

---
## Tool

Symbols for [Tool](../../configuration/robots/Tools) will be created between 113-224.

|Address| Elements| 
|:------:|:-:|
|113_120 | Dock_Fraes (will be added soon)|
|121_128 | Greifer|
|129_224 | options[1-12]|

![img](../../../assets/docs/generation/tags/Tool.jpg)
---