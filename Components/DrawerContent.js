import React from 'react';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer"

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'


export function DrawerContent(props){

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
      setIsDarkTheme(!isDarkTheme)
  }

  return(
    <View style={{flex:1}}>
         <DrawerContentScrollView {...props}>
             <View style={styles.drawerContent}>
                      <View style={styles.userInfoSection}>
                          <View style={{flexDirection:'row',marginTop: 15}}>
                             <Avatar.Image
                                 source={{
                                     uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                 }}
                                 size={50}
                             />
                              <View style={{marginLeft:15, flexDirection:'column'}}>
                                 <Title style={styles.title}>John Doe</Title>
                                 <Caption style={styles.caption}>@j_doe</Caption>
                              </View>
                          </View>
                     </View>

                 <Drawer.Section style={styles.drawerSection}>
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="home-outline"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Home"
                         onPress={() => {props.navigation.navigate('Product')}}
                     />
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="account-outline"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Users"
                         onPress={() => {props.navigation.navigate('User')}}
                     />
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="bookmark-outline"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Bookmarks"
                         onPress={() => {props.navigation.navigate('Product')}}
                     />
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="settings-outline"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Paramètres"
                         onPress={() => {props.navigation.navigate('Settings')}}
                     />
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="account-check-outline"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Users"
                         onPress={() => {}}
                     />
                 </Drawer.Section>

                 <Drawer.Section title="Preferences">
                     <TouchableRipple onPress={() => {toggleTheme()}}>
                         <View style={styles.preference}>
                             <Text>Dark Theme</Text>
                             <View pointerEvents="none">
                                 <Switch value={isDarkTheme}/>
                             </View>
                         </View>
                     </TouchableRipple>
                 </Drawer.Section>

                 <Drawer.Section style={styles.bottomDrawerSection}>
                     <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="exit-to-app"
                             color={color}
                             size={size}
                             />
                         )}
                         label="Sign Out"
                         onPress={() => {signOut()}}
                     />
                 </Drawer.Section>
             </View>
         </DrawerContentScrollView>

     </View>
  )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',

    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
