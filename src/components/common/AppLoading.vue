<template>
    <div fixed-center>
        <icon-icon-park-outline:loading-three class="loading-icon text-[#aaa] text-80px" />
    </div>
</template>
<style lang="less" scoped>
.loading-icon {
    animation: turn 1s linear infinite; 
}

@keyframes turn {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}

	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

</style>
