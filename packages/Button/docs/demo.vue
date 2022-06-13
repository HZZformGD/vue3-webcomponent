<template>
  <p>inline | block</p>


  <xizi-button> inline按钮 </xizi-button>
  <p ></p>
  <xizi-button :block="true"> 块级按钮 </xizi-button>
</template>

<script setup>
import { Button, registerCustomElement } from "../../index";
registerCustomElement(Button);
</script>
