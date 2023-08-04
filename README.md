# react-native-my-image-picker

React Native image-picker component for Android , base on **react-native-image-crop-picker**. Supports photo or local album uploading.

React Native 图片选择器组件for Android，基于react-native-image-crop-picker开发，支持拍照或本地相册上传

小图标的显示用到了react-native-vector-icons

react-native-image-crop-picker的安装需要配置一下，详细请看github

https://github.com/ivpusic/react-native-image-crop-picker



## Example

<img src="http://43.139.223.94:8889/tmp_uploads/statics/image-picker.gif" alt="example" style="width:150%;" />







## Install

`$ npm install react-native-my-image-picker --save`

### Mostly automatic installation

If you are using `React Native <= 0.59.X`, link the native project:

`$ react-native link react-native-my-image-picker`






## Usage
```
# basic usage
import MyImagePicker from 'react-native-my-image-picker'

<View style={{height:150,width:150}}>
	<MyImagePicker describe={'拍摄/上传'} callBackImage={(image)=>console.log(image)}/>
</View>
```


<img src="http://43.139.223.94:8889/tmp_uploads/statics/image-20230803.png" alt="example" style="width: 33%;" />





## Properties

| Prop  | Default  | Type | Description |
| :------------ |:----------------| :---------------:| :-----|
| describe | 无 （非必须） | String |  |
| containerStyle | 无 （非必须） | Object | 容器样式，可以设置边框样式颜色等 |
| pickTextStyle | 无 （非必须） | Object | 设置describe文字样式 |




## methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| callBackImage | - | 返回处理后的图片url |



