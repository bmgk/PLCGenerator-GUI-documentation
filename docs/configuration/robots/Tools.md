---
id: Tools
title: Tools
---

## Description

This parameter is used to manage Robot Interlocks.

<img src={'\\assets\\docs\\configuration\\robots\\Tools.jpg'}/>

---

## Definition

| Name              |      Value
| -------------     | :-----------:
| Address Position  | Posiiton in [Robot Tags](../../generation/tags/Robots)  (0-11, each index can be used only one).|                
| Tool Name         | Target robot.  

:::note
Gripper has static position in Robot Tags and don't use 'Address Position'.
:::

:::note
Some tools take more than one address position 'Slot'. 
If such a situation occurs, you will be informed by program.
:::