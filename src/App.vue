<template>
  <router-view />
</template>
<script setup>
import { provide } from "vue";
import getImgSrc from "@/utils/imgUtil.js";
provide("getImgSrc", getImgSrc);
</script>
<style></style>
