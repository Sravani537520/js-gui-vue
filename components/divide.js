const div = (x, y) => {
    let res = Math.round((x / y) * 100) / 100;
    return res
}


const divide = new Vue({
    el: '#division',
    data: {
        guest: 'Emmett',
        first2: 5,
        second2: 3
    },
    computed: {
        divide: function () {
            const i = parseInt(this.first2)
            const j = parseInt(this.second2)
            return `${this.guest}, your value is ${div(i, j)}.`
        }
    }
})