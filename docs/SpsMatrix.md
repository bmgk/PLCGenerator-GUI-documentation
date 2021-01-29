---
id: SpsMatrix
title: SpsMatrix
---

To speed up work with configuration it is possible to import SPS Matrix in 'xlsm' file.

# Basic

List of robot is taken from Basic(first) sheet. It is importan like for every described here elements.

![img](../assets/docs/spsMatrix/Basic.jpg)

:::note
That row, column, table size must be the same like in pattern.
:::

:::important
All robots must exist in structure from Eplan.
:::

---

## FM

Fm is read from top to down or to first empty cell. Matrix reader ignore 'FMx' text on start. (This is added back to comment during generation)    

![img](../assets/docs/spsMatrix/Fm.jpg)

---

## Tool

Tools is read from top to down.

![img](../assets/docs/spsMatrix/Tools.jpg)

:::note
Posiiton for tools will in address tags is automaticlly calculated.
:::

---

## Freigabe

Freigabes readed station column and try to find structure element for it.
After Freigabe index extracted is name and all after name is freigabe comment.


|WerkzeugFreigabe Type   |StellungFreigabe Type |
|:------------------:|:---------------:|
|Profilfrei          |Freigabe         |
|InPositionEntnehmen |StatusMeldung    |
|InPositionAblegen   |KeinTeilInStation|
|InPosition          |                 |
|InPositionPOT       |                 |

![img](../assets/docs/spsMatrix/Freigabe.jpg)

:::note
Check detected stations for 'Freigabe' after import.
:::

---

## Interlocks

Interlock is readed from left to right and looking for first not empty cell. 
When interlock exist, read robot name from column name and basic on it create logic.

![img](../assets/docs/spsMatrix/Interlock.jpg)

---