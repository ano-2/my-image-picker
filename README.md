# react-native-my-image-picker

React Native image-picker component for Android , base on **react-native-image-crop-picker**. Supports photo or local album uploading.

React Native 图片选择器组件，基于react-native-image-crop-picker开发，支持拍照或本地相册上传

## Install

`$ npm install react-native-my-image-picker --save`

### Mostly automatic installation

If you are using `React Native <= 0.59.X`, link the native project:

`$ react-native link react-native-my-image-picker`


## Usage
```javascript
import MyImagePicker from 'react-native-my-image-picker'


<MyImagePicker describe={'拍摄/上传'} callBackImage={(image)=>console.log(image)}/>
```



## Properties

| Prop  | Default  | Type | Description |
| :------------ |:----------------| :---------------:| :-----|
| describe | 无 （非必须） | String |  |
|  |  |  |  |






## methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| callBackImage | - | 返回处理后的图片url |

