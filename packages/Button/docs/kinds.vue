<template>
  <p>尺寸</p>
  <xizi-row align="center" justify="center">
    <xizi-col>
      <xizi-button size="normal"> 中按钮 </xizi-button>
    </xizi-col>
    <xizi-col>
      <xizi-button size="small"> 小按钮 </xizi-button>
    </xizi-col>
    <xizi-col>
      <xizi-button size="large"> 大按钮 </xizi-button>
    </xizi-col>
  </xizi-row>
</template>

<script setup>
import { Button, registerCustomElement, Row, Col } from "../../index";
registerCustomElement(Button, Row, Col);
</script>
