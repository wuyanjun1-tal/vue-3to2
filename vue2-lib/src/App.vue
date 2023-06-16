<template>
  <div id="app">
    123
    <testCom></testCom>
  </div>
</template>

<script setup>
// import testCom from '../../vue3-lib/src/tsxCom.tsx'  //  可以渲染
import testCom from '../../lib/index.umd' //  无法渲染

console.log(testCom);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
