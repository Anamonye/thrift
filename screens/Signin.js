import { View,Text,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '../Utils/theme';
import { SafeArea } from '../Utils/safearea';
import { Button, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleArrowLeft, } from '@fortawesome/free-solid-svg-icons';

export function Signin ({navigation}) {
      
  
  return(
    <SafeArea>
        <ScrollView>
          <Text style={styles.brand}>Thrift</Text>
                <Text style={styles.intro}>Sign in and enjoy giveaways
                </Text>
                <View style={styles.alreadyHaveAccount}>
                    <View style={styles.info}>
                    <Text style={styles.infoTitle}>Dont Have an Account Please SignUp?</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                    <FontAwesomeIcon icon={faCircleArrowLeft}
                    color ={Theme.colors.blue700}
                    size={Theme.sizes[5]}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                    placeholder='Email Address'
                    mode='outlined'
                    outlineColor={Theme.colors.maroon300}
                    activeOutlineColor={Theme.colors.maroon500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address' />

                    <TextInput
                    placeholder='Password'
                    mode='outlined'
                    outlineColor={Theme.colors.maroon300}
                    activeOutlineColor={Theme.colors.maroon700}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    secureTextEntry={true} />
                  <TouchableOpacity>

                    <Button
                      mode="contained"
                      color={Theme.colors.maroon700} contentStyle={{paddingVertical:Theme.sizes[3]}}>Sign in
                    </Button>
                  </TouchableOpacity>
                </View>


        </ScrollView>
    </SafeArea>
  )
}

const styles = StyleSheet.create({  
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        color:Theme.colors.maroon700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderColor:Theme.colors.maroon300,
        borderRadius:6,
        paddingVertical:Theme.sizes[2],
        marginTop:Theme.sizes[2]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5
    },
    form:{
        marginTop:Theme.sizes[2]
    },
})