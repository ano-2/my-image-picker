/**
 * @Title  [MyImagePicker]
 * @Time   2023-07-28
 * @Params describe: String 描述默认为 空
 * 		     containerStyle Object
 *         pickTextStyle Object
 * @return callBackImage function
 */
import React, { useState }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable, Modal, Image } from 'react-native'; 

import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

const MyImagePicker = (props) => {
    const [isUpload, setIsUpload] = useState(false);
    const [image, setImage] = useState(undefined);
    // 
    const [modalVisible, setModalVisible] = useState(false);
    

    // 没上传照片的视图
    const pickView = () => {
        return (
            <TouchableOpacity style={[Styles.uploadBox, props.containerStyle]} onPress={()=>{setModalVisible(true)}}>
                <Icon name="camera" size={30} color="rgba(0,0,0,.6)" />
                { props.describe ? <Text style={[Styles.pickViewText, props.pickTextStyle]}>{props.describe}</Text> : <></> } 
            </TouchableOpacity>
        )
    }

    // 上传照片的缩略图
    const imageView = () => {
        return (
            <>
              <Image
                style={{  height: '100%', borderRadius: 3 }}
                source={{ uri: image }}
              /> 
                {/* 右上角的打叉按钮 绝对定位 */}
                <TouchableOpacity 
                  onPress={()=>{
                      setIsUpload(false)
                      // 取消后将回调参数也设置为空
                      props.callBackImage(undefined)
                  }}
                  style={{ position: 'absolute', top: -10, right:-10 }}
                >
                    <Icon name="closecircle" size={20} color="rgb(0,0,0)" />
                </TouchableOpacity>
            </>
           
        )
    }

    //  
    const uploadModal = () => {
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { 
            }}
          >
            <Pressable  onPress={()=>setModalVisible(false)} style={{flex:1,backgroundColor:"rgba(0,0,0,.6)",justifyContent:'flex-end' }}>
                {/* 打开相机 */}
                <TouchableOpacity onPress={()=>{
                  // 打开相机
                  ImagePicker.openCamera({
                      width: props.crop.width,
                      height: props.crop.height,
                      cropping: true,
                    })
                      .then(image => {
                        setImage(image.path)
                        setIsUpload(true)
                        props.callBackImage(image.path)
                      }).finally(()=>setModalVisible(false)) // 选完照片关闭弹窗
                }} style={{paddingVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                    <Icon name="camerao" size={30} color="rgba(0,0,0,.6)" />
                    <Text>{'拍照'}</Text>
                </TouchableOpacity>
                {/* 打开相册 */}
                <TouchableOpacity onPress={()=>{
                    // 打开相册
                    ImagePicker.openPicker({
                        width: props.crop.width,
                        height: props.crop.height,
                        cropping: true,
                      })
                        .then(image => {
                          setImage(image.path)
                          setIsUpload(true)
                          props.callBackImage(image.path)
                        }).finally(()=>setModalVisible(false))// 选完照片关闭弹窗
                }} style={{paddingVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                    <Icon name="picture" size={30} color="rgba(0,0,0,.6)" />
                    <Text>{'从相册选择'}</Text>
                </TouchableOpacity>
            </Pressable >
          </Modal>
        )
    }

    return(
        <>
            { isUpload ? imageView() : pickView() }  
            { uploadModal() }
        </>
        
    )
}

MyImagePicker.defaultProps = {
  callBackImage: () => {},
  describe: '',
  containerStyle : {},
  pickTextStyle: {},
  crop:{
    width:460,
    height: 287.5
  }
}

export default MyImagePicker;



var Styles = StyleSheet.create({
    uploadBox:{
      borderStyle: 'dashed', 
      borderColor: 'gray', 
      borderWidth: 2,
      backgroundColor:'transparent',
      width: '100%',
      height: '100%',
      minHeight:50,
      minWidth:50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    pickViewText:{
      paddingVertical:10,
      color:'#9a9a9a',
      fontSize:10
    }
});



