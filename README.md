# react-native-my-image-picker

React Native image-picker component for Android , base on **react-native-image-crop-picker**. Supports photo or local album uploading.

React Native 图片选择器组件for Android，基于react-native-image-crop-picker开发，支持拍照或本地相册上传

小图标的显示用到了react-native-vector-icons

react-native-image-crop-picker的安装需要配置一下，详细请看github

https://github.com/ivpusic/react-native-image-crop-picker



## Example

<img src="http://43.139.223.94:8889/tmp_uploads/statics/image-picker.gif" alt="example" width="450" />







## Install

`$ npm install react-native-my-image-picker --save`

### Mostly automatic installation

If you are using `React Native <= 0.59.X`, link the native project:

`$ react-native link react-native-my-image-picker`





## Usage

**基础用法**

```
# Basic usage
import MyImagePicker from 'react-native-my-image-picker'

<View style={{height:150,width:150}}>
	<MyImagePicker describe={'拍摄/上传'} callBackImage={(image)=>console.log(image)}/>
</View>
```

<img src="http://43.139.223.94:8889/tmp_uploads/statics/image-20230803.png" alt="example" width="450" />



**修改样式** containerStyle pickTextStyle

```
# Change style of container and text
import MyImagePicker from 'react-native-my-image-picker'

<View style={{height:150,width:150}}>
	<MyImagePicker containerStyle={{backgroundColor:'#eee',borderStyle: 'solid',borderWidth:1}} pickTextStyle={{color:'grey',fontSize:14}} describe={'拍摄/上传'} callBackImage={(image)=>console.log(image)}/>
</View>
```


 <img src="http://43.139.223.94:8889/tmp_uploads/statics/image-picker.png" width="450">

`





**自定义裁剪大小** crop={{width:500,height:500}}

```
# Modify crop range
import MyImagePicker from 'react-native-my-image-picker'

<View style={{height:150,width:150}}>
	<MyImagePicker crop={{width:500,height:500}} describe={'拍摄/上传国徽面'} callBackImage={(image)=>console.log(image)}/>
</View>
```

<img src="http://43.139.223.94:8889/tmp_uploads/statics/image-picker-changeCrop.png" alt="example" width="400" />

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:----------------| :---------------:| :-----|
| describe | 无 （非必须） | String |  |
| containerStyle | 无 （非必须） | Object | 容器样式，可以设置边框样式颜色等 |
| pickTextStyle | 无 （非必须） | Object | 设置describe文字样式 |
| crop | width: 460, height: 287.5 | Object | 剪裁尺寸 |




## methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| callBackImage | - | 返回处理后的图片信息 |


### Response Object （摘自react-native-image-crop-picker文档）

即 callBackImage={(image)=>console.log(image)} 中的image

根据自己的业务需求对取到的image进行处理，剪裁后的图片url在image.path

详细请看github

https://github.com/ivpusic/react-native-image-crop-picker


| Property                  |  Type  | Description                              |
| ------------------------- | :----: | :--------------------------------------- |
| path                      | string | Selected image location. This is null when the `writeTempFile` option is set to false. |
| localIdentifier(ios only) | string | Selected images' localidentifier, used for PHAsset searching |
| sourceURL(ios only)       | string | Selected images' source path, do not have write access |
| filename(ios only)        | string | Selected images' filename                |
| width                     | number | Selected image width                     |
| height                    | number | Selected image height                    |
| mime                      | string | Selected image MIME type (image/jpeg, image/png) |
| size                      | number | Selected image size in bytes             |
| duration                  | number | Video duration time in milliseconds      |
| data                      | base64 | Optional base64 selected file representation |
| exif                      | object | Extracted exif data from image. Response format is platform specific |
| cropRect                  | object | Cropped image rectangle (width, height, x, y)    |
| creationDate (ios only)   | string | UNIX timestamp when image was created    |
| modificationDate          | string | UNIX timestamp when image was last modified |
