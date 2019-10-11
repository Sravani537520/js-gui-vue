const rem = (x, y) => { return x * y }

const multi = new Vue({
  el: '#compute',
  data: {
    guest: 'Emmett',
    countOfResources: 5,
    attributesPerResource: 3
  },
  computed: {
    find: function () {
      const i = parseInt(this.countOfResources)
      const j = parseInt(this.attributesPerResource)
      return `${this.guest}, your answer is ${rem(i, j)}.`
    }
  }
})