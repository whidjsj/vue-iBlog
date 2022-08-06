<template>
  <div id="head">
    <slot name="Admin"></slot>
    <slot name="En"></slot>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#head{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#h1{
  width: 100%;
  height: 6vh;
  font-size: 5vh;
  line-height: 6vh;
}

#h3{
  font-size: 1vh;
  line-height: 3vh;
}

/* 中心缩放 */
.slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>