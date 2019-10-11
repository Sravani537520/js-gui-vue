const mul = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#product',
  data: {
    guest: 'Emmett',
    first1: 5,
    second1: 3
  },
  computed: {
    multiply: function () {
      const i = parseInt(this.first1)
      const j = parseInt(this.second1)
      return `${this.guest}, your product is ${mul(i, j)}.`
    }
  }
})