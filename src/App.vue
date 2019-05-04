<template>
  <div id="app">
    <ul>
      <li>{{user.name}}</li>
      <li>{{user.email}}</li>
      <li><img :src="user.img" alt=""></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      user: {
        name: '',
        img: '',
        email: ''
      },
      interval: null
    }
  },
  mounted () {
    this.loadData()

    this.interval = setInterval(function () {
      this.loadData()
    }.bind(this), 3000)
  },
  methods: {
    loadData () {
      axios
        .get('https://randomuser.me/api/')
        .then(response => (
          this.user = {
            name: response.data.results[0].name.first + ' ' + response.data.results[0].name.last,
            img: response.data.results[0].picture.medium,
            email: response.data.results[0].email
          }
        ))
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
</style>
