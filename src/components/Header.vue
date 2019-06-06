<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      v-model="text"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keypress="handleInput"
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleInput(e) {
      if (e.keyCode === 13) {
        this.$emit("addTodo", this.text);
        this.text = "";
      }
    }
  }
};
</script>

<style>
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>
