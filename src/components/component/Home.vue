<template>
  <div id="root">
    <div id="user">
      <span></span>
      <div id="img">
        
      </div>
      <div id="username">
        <h1>黄维翔</h1>
        <h3>最终管理者</h3>
      </div>
    </div>

    <div id="a" ref="echarts"></div>
    <div id="b" ref="echarts1"></div>
    <div id="c" ref="echarts2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  created(){
  },
  mounted(){
    this.Create()
    this.Create1()
    this.Create2()
  },
  data() {
    return {
      
    }
  },
  methods:{
    Create(){
      let myChart = echarts.init(this.$refs.echarts);
      // 绘制图表
      myChart.setOption({
        title: {
          text: '近期访客数量'
        },
        tooltip: {},
        xAxis: {
          data: ['2022.07.15', '2022.07.16', '2022.07.17', '2022.07.18', '2022.07.19']
        },
        yAxis: {},
        series: [
          {
            name: '访客数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },

    Create1(){
      let myChart = echarts.init(this.$refs.echarts1);
      myChart.setOption({
        title: {
          text: '注册数量'
        },
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {},
        series: [
          {
            data: [101, 99, 80, 70, 43, 201, 108, 80, 103, 190, 290, 233],
            type: 'line',
            smooth: true
          }
        ]
      })
    },

    Create2(){
      let myChart = echarts.init(this.$refs.echarts2);
      myChart.setOption({
        title:{
          text: '用户留存'
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: '访问一次'
              },
              {
                value: 110,
                name: '访问两次'
              },
              {
                value: 208,
                name: '多次访问'
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
#root{
  position: relative;
}

#user{
  width: 600px;
  height: 350px;
  background-color: rgb(221, 223, 223);
  float: left;
  box-shadow: 2px 2px 5px 1px gray;
  border-radius: 20px 20px 20px 20px;
}

span{
  display: block;
  height: 1px;
  width: 100%;
}

#img{
  width: 140px;
  height: 140px;
  background-image: url('../../assets/keli.jpeg');
  background-size: 140px 140px;
  overflow: hidden;
  border-radius: 50%;
  margin: 30px auto;
}

#username > h1{
  text-align: center;
}

#username > h3{
  margin-top: 5px;
  text-align: center;
}

#a{
  width: 1000px;
  height: 400px;
  margin-left: 10px;
  float: right;
}

#b{
  position: absolute;
  width: 1000px;
  height: 300px;
  top: 450px;
}

#c{
  position: absolute;
  width: 500px;
  height: 350px;
  top: 400px;
  left: 1050px;
}
</style>