<template>
    <div class="w-[300px] bg-white h-72 drop-shadow-lg rounded-2xl">
      <img src="/pic/votePic.jpg" class="w-full h-36 rounded-t-2xl" />
    </div>
</template>

<script>
export default {
	data () {
    return {
      hoverTextCheck: false
		}
	},
	methods: {
		goToHomePage(){
	this.$router.replace(({ path: '/' }))}	
		}
}


</script>

<style scoped>

</style>>

