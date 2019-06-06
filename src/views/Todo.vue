<template>
  <div id="app">
    <section class="todoapp">
      <Header @addTodo="addTodo"/>
      <Body :todos="filteredTodos" @updateTodo="updateTodo" @deleteTodo="deleteTodo"/>
      <Footer :size="size" @onChangeFilter="handleFilter"/>
    </section>
  </div>
</template>

<script>
import "../assets/css/main.css";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
      todos: [],
      filterType: "All"
    };
  },
  computed: {
    size() {
      return this.filteredTodos.length;
    },
    filteredTodos() {
      switch (this.filterType) {
        case "Doing": {
          return this.todos.filter(todo => !todo.isDone);
        }
        case "Done": {
          return this.todos.filter(todo => todo.isDone);
        }
        default: {
          return this.todos;
        }
      }
    }
  },
  methods: {
    addTodo(text) {
      this.todos = [
        ...this.todos,
        {
          key: new Date(),
          text,
          isDone: false
        }
      ];
    },
    updateTodo(key) {
      const current = [...this.todos];
      const todo = current.find(todo => todo.key === key);

      if (todo) {
        todo.isDone = !todo.isDone;
        this.todos = current;
      }
    },
    deleteTodo(key) {
      this.todos = this.todos.filter(todo => todo.key !== key);
    },
    handleFilter(type) {
      this.filterType = type;
    }
  }
};
</script>

<style>
</style>
