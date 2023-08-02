
# react-native-my-image-picker

## Getting started

`$ npm install react-native-my-image-picker --save`

### Mostly automatic installation

`$ react-native link react-native-my-image-picker`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNMyImagePickerPackage;` to the imports at the top of the file
  - Add `new RNMyImagePickerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-my-image-picker'
  	project(':react-native-my-image-picker').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-my-image-picker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-my-image-picker')
  	```


## Usage
```javascript
import RNMyImagePicker from 'react-native-my-image-picker';

// TODO: What to do with the module?
RNMyImagePicker;
```
  