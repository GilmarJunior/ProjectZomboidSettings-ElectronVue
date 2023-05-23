
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods: {
    changePage() {
      this.$router.push('/edit')      
    }
  }
}