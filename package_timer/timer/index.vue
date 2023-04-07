<script>
export default {
  name: 'timer-plugin',
  props: {
    str: String
  },
  //   }
  data () {
    return {
      numList: ''
    }
  },
  methods: {
    changeStr (str) {
      this.numList = this.str.split('')
    }
  },
  created () {
    this.changeStr(this.str)
    console.log(123)
  }
}
</script>
<template>
  <div class="box">
    <div class="left"></div>
    <div v-for="(item, index) in numList" :key="index">
      <div v-if="item !== ','" class="contain" data-number="1">{{ item }}</div>
      <div v-else class="comma">
        <div class="comma_img"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  display: flex;
  align-items: center;
  position: relative;
  background-color: #1e1d2b;
  padding: 10px;
  margin: 10px;
}
.contain {
  width: 77px;
  height: 105px;
  color: #1890ff;
  border: 1px solid #eee;
  background-image: url(../../assets/bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  font-size: 60px;
  line-height: 105px;
  text-align: center;
  position: relative;
}

.contain::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  border-radius: 0 0 4px 4px;
  border-bottom: 1px solid #000;
  z-index: 13;
}
.contain::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border-radius: 0 0 4px 4px;
}
.comma {
  width: 9px;
  height: 100%;
  padding: 4px;
  margin: 4px;
  position: relative;
}

.comma .comma_img {
  width: 9px;
  height: 27px;
  background-image: url(../../assets/comma.png);
  position: absolute;
  top: 5%;
}
.left,
.right {
  width: 20px;
  height: 20px;
  margin: 10px;
  background-image: url(../../assets/arrow.png);
  background-repeat: no-repeat;
}
.right {
  transform: rotate(180deg);
}
</style>
