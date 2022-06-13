<template>
  <p>Row</p>

  <div class="flex">
    <xizi-col align="center">
      <p>这是第一个</p>
      <p>这是第二个</p>
    </xizi-col>
  </div>
</template>

<script setup>
import { Col, registerCustomElement } from "../../index";
registerCustomElement(Col);
</script>
