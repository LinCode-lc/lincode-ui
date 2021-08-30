<template>
  <div id="main">
    <div class="cardlist">
      <div v-for="(item, index) in records" :key="index" class="nine-box" ref="nine-box">
        <NineSquare
          @childMounted="childMounted"
          :nineSquare="item"
          :plateId="item.plateId"
          class="nine-card"
          ref="nine"
        ></NineSquare>
      </div>
    </div>

    <div class="changeCol">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">浏览模式</a>

      <a href="javascript:;" @click="clickChangeColmun(1)">单栏</a>

      <a href="javascript:;" @click="clickChangeColmun(2)">双栏</a>

      <a href="javascript:;" @click="clickChangeColmun(3)">三栏</a>
    </div>
  </div>
</template>

<script>
import NineSquare from "./NineSquare";

//瀑布流
let waterfall = function(opt) {
  this.el = document.getElementsByClassName(opt.el)[0];
  this.oItems = document.getElementsByClassName(opt.childName);
  this.colmun = opt.colmun;
  this.gap = opt.gap;
  this.heightArr = [];
  this.itemWidth =
    (this.el.offsetWidth - this.gap * (this.colmun - 1)) / this.colmun;
};
waterfall.prototype.init = function() {
  this.render();
};
function getMinIdx(arr) {
  return arr.indexOf(Math.min.apply(null, arr));
}
waterfall.prototype.render = function() {
  // console.log(this.oItems.length);
  let item = null;
  for (let i = 0; i < this.oItems.length; i++) {
    item = this.oItems[i];

    item.style.width = this.itemWidth + "px";
    // console.log(item);
    // console.log(item.style.width);
    if (i < this.colmun) {
      item.style.top = 0;
      item.style.left = i * (this.itemWidth + this.gap) + "px";
      this.heightArr.push(item.offsetHeight);
    } else {
      // console.log(this.heightArr);
      let minIdx = getMinIdx(this.heightArr);
      // console.log(minIdx);
      item.style.left = minIdx * (this.itemWidth + this.gap) + "px";
      item.style.top = this.heightArr[minIdx] + this.gap + "px";
      this.heightArr[minIdx] += item.offsetHeight + this.gap;
    }
  }
};
export default {
  name: "NineSquareList",
  components: {
    NineSquare
  },

  data() {
    return {
      records: [
        {
          avatar:
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
          title: "",
          userName: "艺画开天",
          creatTime: "6分钟前",
          postContents:
            "的看法领导妇女四道口附近上空地方还是大家看法事件的看法和科技孵化和出面可能是的能力可能能吃苦的那颗城市快速路才能",
          images: [
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg"
          ]
        },
        {
          avatar:
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
          title: "",
          userName: "艺画开天",
          creatTime: "6分钟前",
          postContents:
            "的看法领导妇女四道口附近上空地方还是大家看法事件的看法和科技孵化和出面可能是的能力可能能吃苦的那颗城市快速路才能",
          images: [
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg"
          ]
        },
        {
          avatar:
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
          title: "",
          userName: "艺画开天",
          creatTime: "6分钟前",
          postContents:
            "的看法领导妇女四道口附近上空地方还是大家看法事件的看法和科技孵化和出面可能是的能力可能能吃苦的那颗城市快速路才能",
          images: [
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg"
          ]
        },
        {
          avatar:
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
          title: "",
          userName: "艺画开天",
          creatTime: "6分钟前",
          postContents:
            "的看法领导妇女四道口附近上空地方还是大家看法事件的看法和科技孵化和出面可能是的能力可能能吃苦的那颗城市快速路才能",
          images: [
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg",
            "https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=a587b23df11f3a295a9dddcaac159007/500fd9f9d72a60590cfef2f92934349b023bba62.jpg"
          ]
        }
      ],

      //点开帖子的作者
      user: {},
      //是否关注了即将点开的帖子的作者
      hasFollow: false,

      //帖子详情侧边栏
      isCollection: false,
      isSupport: false,
      //评论
      commentIf: false,
      //分列
      colmun: 2,
      //子组件加载好的个数
      childCount: 0,
      //作者
      author: {}
    };
  },

  created() {},
  methods: {
    //改变列数
    clickChangeColmun(colNum) {
      this.colmun = colNum;
      this.changeColmun();
    },
    changeColmun() {
      let wf = new waterfall({
        elWidth: 80.25,
        childWidth: 25,
        el: "cardlist",
        childName: "nine-box",
        colmun: this.colmun,
        gap: 10
      });
      wf.init();
    },
    //子组件加载完了
    childMounted() {
      this.childCount++;
      // console.log(this.records.length);
      if (this.childCount == this.records.length) {
        console.log(this.records.length);
        console.log(this.childCount);
        this.changeColmun();
      }
    }
  }
};
</script>

<style scoped>
#main {
  height: 100%;
  width: 100%;
  background-color: var(--themeColor);
  position: relative;
  padding-bottom: 3000px;
  margin-bottom: 3000px;
  padding-left: 3.75rem /* 300/16 */;
  padding-top: 1.75rem /* 300/16 */;
}
/* 选择列数下拉框 */
.changeCol {
  position: absolute;
  right: 3.875rem /* 30/16 */;
  top: 3.125rem /* 50/16 */;
}
.search {
  /* z-index: 1; */
  /* position: fixed; */
  /* padding-left: 1.875rem ;
  padding-top: 3.125rem ;
  margin-bottom: 1.875rem ;
  height: 3.75rem ;
  width: 80%; */
  position: relative;
  margin-bottom: 1.875rem /* 30/16 */;
}

.cardlist {
  width: 90%;
  position: relative;
}

.nine-box {
  width: 25rem;
  position: absolute;
}
.locker >>> .ant-drawer-content {
  width: 50%;
  height: 100%;
  position: relative;
  left: 400px;
  bottom: 100px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.95);
}
.locker >>> .ant-drawer-content-wrapper {
  box-shadow: none;
}
/* 作者 */
.user-button button {
  background-color: #fff;
  border-radius: 0.25rem /* 4/16 */;
  font-size: 1rem /* 10/16 */;
  padding: 0.5rem /* 3/16 */ 0.7rem /* 3/16 */;
  margin: 0 0.1875rem /* 3/16 */;
  border: none;
  outline: none;
}
.avatar {
  border-radius: 50%;
  border: 1px solid #fff;
}

.spanText {
  font-size: 0.875rem /* 14/16 */;
}
.span-num {
  font-size: 1rem /* 16/16 */;
  margin-top: 0.625rem /* 10/16 */;
}
.imgDiv {
  width: 12%;
}
.authorBox {
  position: relative;
}
.userInfo {
  position: absolute;
  left: 1.875rem /* 30/16 */;
}
.has-text-centered {
  position: absolute;
  right: 10.875rem /* 30/16 */;
  display: flex;
  width: 18.75rem /* 300/16 */;
}
.author-item {
  flex: 1;
}
/* 帖子内容样式 */
.topicContent {
  margin: 0 auto;

  width: 48.5rem /* 600/16 */;
  padding: 1.25rem /* 20/16 */;
  padding-top: 8.25rem /* 20/16 */;
}
.topicTitle {
  text-align: center;
}
.topicText {
  margin-bottom: 8.75rem /* 300/16 */;
  font-size: 18px;
  font-weight: 400;
}
/* 图片样式 */

.imageBox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.col1 {
  width: 30rem /* 330/16 */;
  height: 30rem /* 300/16 */;
  display: block;
}
.col2 {
  width: 20rem /* 190/16 */;
  height: 20rem /* 190/16 */;
  display: block;
}
.col3 {
  width: 15rem /* 125/16 */;
  height: 15rem /* 115/16 */;

  display: block;
}
.image {
  height: 100%;
  width: 100%;
  border: 1px solid rgba(13, 24, 24, 0.1);
  border-radius: 0.3125rem /* 5/16 */;
}
/* 表情 */
.cc {
  display: inline-block;
}
/* 帖子详情侧边栏 */
.commendBar {
  position: absolute;
  right: 5.875rem /* 30/16 */;
  top: 10.75rem /* 60/16 */;
}
/* 评论 */
.showComment {
}
/* 浏览模式 */
.ant-dropdown-link {
  color: var(--subjectColor);
  font-size: 14px;
  font-weight: 600;
}
/* 链接样式 */
.link {
  font-size: 18px;
  color: var(--subjectColor);
}
</style>