<template>
	<div id="app" data-aos="zoom-in" class="bg-gradient-to-r from-[#AC76B5] to-[#FE7D7D] transition-all duration-500 delay-150 h-screen w-screen flex justify-center items-center py-12">
	<div class="w-10/12 h-full bg-white rounded-b-2xl rounded-t-3xl drop-shadow-lg">
    <navBar />
    <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-3 gap-8 px-8">
      <cardList />
      <cardList />
      <cardList />
      <cardList />
    </div>
    
  </div>
	</div>
</template>

<script>
export default {
	data () {
    return {
      hoverTextCheck: false
		}
	},
    mounted() {
    import('aos/dist/aos.css')
    import('aos').then((AOS) => {
      AOS.init()
    })
  },
	methods: {
		goToMainPage(){
			setTimeout(() => {
	this.$router.replace(({ path: '/InteractiveRating' }))}
	, 500)
			

		}
}
}

</script>

<style scoped>

</style>>

