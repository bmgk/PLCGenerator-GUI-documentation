---
id: Betriebsarten
title: Betriebsarten
---

This description includes only the most important elements from the block. The rest is prepared for manual filling.

## Meldung

On this moment exist only empty call (Feature in progress). 

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/Meldung.jpg)

---

### NotHalt

Each found "Not-Halt" will be parted and connected to 'Meldung' blocks. 

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/NotHalt.jpg)

---

## Zone

### Door

Each detected doors will be connected. Actual supported blocks (FB_Schutzkreis, FB_Schutzkreis_Zuhal) 

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/SK.jpg)

:::note
If in zone exist 'BGS1M' symbol 'FB_Schutzkreis_Zuhal' will be generated.
:::

---

### PF0

Each robots will be connected to zone 'Profilfrei'.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/PF0.jpg)

---

### K10

Each K10 stations will be connected to 'K10' zone.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/K10.jpg)

---

### PF0WB

Each robots from zone will be connected to 'Profilfrei/Wartungsbereich'.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/PF0WB.jpg)

---

### BA

Created each per zone. On this moment 'UBA ZONE' is not supported.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/BA.jpg)

---

### LSP

Detected 'start buttons' and 'lamps' from the zone will be connected to the appropriate connectors.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/LSP.jpg)

---

### PFK91

Any "PFK 91" lamp detected in the zone will be connected here.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/PFK.jpg)

---

## FrgNotHalt

Summary network for Global 'FrgNotHalt'.

![img](../../../../assets/docs/generation/programBlocks/betriebsarten/FrgNotHalt.jpg)

---