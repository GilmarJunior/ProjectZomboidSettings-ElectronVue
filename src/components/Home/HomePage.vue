<template>
  <img alt="Vue logo" src="../../assets/logo-pz.png">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a @click="changePage">vue-cli documentation</a>.
      <button @click="greet">vue-cli documentation</button>.
    </p>
  </div>
</template>

<script src="./HomePage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
