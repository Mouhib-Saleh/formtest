import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../comp/api';




const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar({navigation}) {



 
  
  
  
  const classes = useStyles();
 
 

 
  
  
 


  return (




    
   <View style={styles.b}>
 <Modal visible ={false}>
<View style={styles.modalc}> 
 <Text> Hi from Modal </Text>
</View>

     </Modal> 
    
   <Text style={{fontWeight: "bold" ,fontSize:30}}>Welcome {navigation.getParam('id')}</Text>
   <Text >Users Data</Text>
   
   <View >

<Api />
<StatusBar style="auto" />

      
      <View > 
      <AppBar position ="fixed"
     
     color="primary" className={classes.appBar}>
       <Toolbar>
         <IconButton edge="start" color="inherit" aria-label="open drawer">
           <MenuIcon />
         </IconButton>
         <Fab color="secondary" aria-label="add" className={classes.fabButton}>
           <AddIcon />
         </Fab>
         <div className={classes.grow} />
         <IconButton color="inherit">
           <SearchIcon />
         </IconButton>
         <IconButton edge="end" color="inherit">
           <MoreIcon />
         </IconButton>
       </Toolbar>
     </AppBar>
      </View>
      </View>
      </View>




  );
}
const styles = StyleSheet.create({
  b: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
   
  },
 
});