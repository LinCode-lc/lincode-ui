## lincode-ui

## 使用

```
npm i lincode-ui
```

```
// in main.js
import LinUI from 'lincode-ui'
import 'lincode-ui/dist/lincode-ui.css'
Vue.use(LinUI)
```



### NineSquare

常用于展示帖子或消息，图片可根据数量自动调整大小，附带点赞收藏等功能

```vue
<NineSquare
   :nineSquare="item"
></NineSquare>
```

```vue
data(){
	return {
		nineSquare:{
		  avatar:string, //头像
          title:string,//标题
          userName: string, //用户名
          creatTime: string, //创建时间
          postContents:string,//内容
          images:array //图片
		}
	}
}
```

![微信图片_20210830221728](C:\Users\linweifan\Desktop\微信图片_20210830221728.png)

### NineSquareList

:records 传入一个NineSquare数组，有瀑布流的效果，并且可通过selectCol灵活的改变瀑布流的列数，满足不同阅读需求的用户

```vue
<NineSquareList :records=records v-model="selectCol"></NineSquareList>
```

```json
data(){
  return {
    records: [
        {
          avatar:string, //头像
          title:string,//标题
          userName: string, //用户名
          creatTime: string, //创建时间
          postContents:string,//内容
          images:array //图片
        },  
      ],
	selectCol: 1  //列数
	}
}
```

![image-20210830222124910](C:\Users\linweifan\AppData\Roaming\Typora\typora-user-images\image-20210830222124910.png)

可通过传入的selectCol随时改变列数

![image-20210830222600930](C:\Users\linweifan\AppData\Roaming\Typora\typora-user-images\image-20210830222600930.png)

### Button

```vue
<lin-button @click="visible = true">按钮</lin-button>
```

```
plain 是否镂空
round 圆角
type success/danger/primary/warning/info
```

### Dialog

```vue
	<lin-dialog width="50%" top="200px" :visible.sync="visible" title="温习提示">
      <h1>你好</h1>
      <template v-slot:footer>
        <lin-button>确认</lin-button>
        <lin-button>取消</lin-button>
      </template>
    </lin-dialog>
```

### Checkbox

```vue
<lin-checkbox v-model="ischeck"></lin-checkbox>
```

```
data(){
	return {
		ischeck:false
	}
}
```



### CheckboxGroup

```vue
   <lin-checkbox-group v-model="gender">
      <lin-radio label="0">男</lin-radio>
      <lin-radio label="1">女</lin-radio>
    </lin-checkbox-group>
```

```
data(){
	return{
		gender:[]
	}
}
```



### Radio

```vue
 
      <lin-radio label="0" v-model="sex">男</lin-radio>
      <lin-radio label="1" v-model="sex">女</lin-radio>

```

```
data(){
	return {
		sex:0
	}
}
```



### RaidoGroup

```vue
    <lin-radio-group v-model="gender">
      <lin-radio label="0">男</lin-radio>
      <lin-radio label="1">女</lin-radio>
    </lin-radio-group>
```

```
data(){
	return {
		gender:0
	}
}
```



### Input

```vue
<lin-input placeholder="请输入用户名" type="text" v-model="value"></lin-input>
<lin-input placeholder="请输入用户名" type="password" v-model="value"></lin-input>
```



### Switch

```vue
<lin-switch v-model="active" active-color="gray" inactive-color="rgb(251, 114, 153)"></lin-switch>
```

```
data(){
	return {
		active:true
	}
}
```



