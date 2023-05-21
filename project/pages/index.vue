<template>
	<div id="app" class="px-[120px]" >
		<Header />
		<Card />
	</div>
</template>

<script>
export default {
	data () {
    return {
      
		}
	},
	  mounted() {
	        this.$store.dispatch('jobStore/getData')
					console.log("x")
  },
	methods: {
		goToMainPage(){
		
		}
}
}

</script>

<style scoped>
button {
 --color: #560bad;
 font-family: inherit;
 height: 2.6em;
 line-height: 2.5em;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 16px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

button:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: linear-gradient(to right, #AC76B5 0%, #FE7D7D 100%);
 height: 100px;
 width: 250px;
 border-radius: 50%;
}

button:hover {
 color: #fff;
  border: 0px solid var(--color);

}

button:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

button:hover:before {
 top: -30px;
 left: -30px;
}

button:active:before {
 transition: background 0s;
}
</style>>

