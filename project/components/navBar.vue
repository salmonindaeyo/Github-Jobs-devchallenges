<template>
    <div class="w-full h-16 rounded-t-2xl flex-row flex items-center px-4">
      <div>🥳</div>
      <div @click="goToHomePage()" class="ml-2 text-[20px] text-transparent font-semibold cursor-pointer select-none">
        <span class="bg-clip-text bg-gradient-to-r from-[#AC76B5] to-[#FE7D7D]"> NUTTAWAT DEV </span> 
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
	methods: {
		goToHomePage(){
	this.$router.replace(({ path: '/' }))}	
		}
}


</script>

<style scoped>

</style>>

