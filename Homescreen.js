import { StatusBar,ScrollView } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground ,Button,Image} from 'react-native';
import styled from "styled-components";
import BigCard from "../components/BigCard";
import MedCard from '../components/MedCard';  
import {Ionicons}from "@expo/vector-icons";
import{TouchableOpacity,Animated,Dimensions,TouchableHighlight} from "react-native";
import Menu from '../components/Menu';
import {connect} from "react-redux";





const screenHeight=Dimensions.get("window").height;
 

function mapStateToProps(state){
  return{menu: state.menu}
}
 
function mapDispatchToProps(dispatch){
  return{
    openmenu: () => dispatch({
      type: "OPENMENU"
    })
  }

}

class Homescreen extends React.Component {
  state={
    left: 10,
    top:new Animated.Value(screenHeight),
    opacity: new Animated.Value(0)
  };
  componentDidUpdate(){
    this.blackscreen()
  }

  blackscreen(){
    if(this.props.menu=="openmenu"){
      Animated.timing(this.state.top,{
        toValue:0,
        duration:10
      }).start();

      Animated.timing(this.state.opacity,{
        toValue:0.6,
        duration:500
      }).start();
    
    }
    if(this.props.menu=="closemenu"){
      Animated.timing(this.state.top,{
        toValue:screenHeight,
        duration: 10
        
      }).start();

      Animated.spring(this.state.opacity,{
        toValue:0,
      }).start();

    }
  }  
  render(){
    return(
      <Root>
        
        <Main>
          <BackgroundImg 
            source={{
                uri:"https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-042.jpg"
                }} 
                style={{width:'100%' ,height:'100%'}}
          />
       
          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden />
            <Header>
              <TouchableOpacity 
                onPress={this.props.openmenu}
                style={{
                  position: "absolute",
                  top: 8,
                  left: 10,
                  zIndex: 100
                }}  
              
              >
            
                <Ionicons 
                  name="ios-menu" 
                  size={40} 
                  color="black"               
                />
              </TouchableOpacity>
              <Logo>FREEFLY</Logo>
            
              <Profile source={{
                uri:"https://i.pinimg.com/originals/c2/61/eb/c261eb4f5b4d38cf4f320f9188430c41.png"}}
              />
            

            </Header> 
            <Slogan>Let's Start To Burst The Stress!!</Slogan>
            <BigCardContainer>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              > 
                {
                  BigCardData.map ((data,index)=> {
                    return <BigCard key={index} mainpage={data.mainpage} />;

                  })
                }
              
              
              </ScrollView>
            </BigCardContainer> 

            <Category>SELECT YOUR CATEGORY!!!</Category>

            <MedCardContainer>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              > 
                {
                  MedCardData.map ((data,index)=> {

                    return <MedCard key={index} lastpage={data.lastpage} />;
                  
                  })
                }
              
             
        
              </ScrollView>
            </MedCardContainer>  
            
          
          </ScrollView>
         
    
        </Main>   
        <AnimatedBlack style={{top: this.state.top, opacity: this.state.opacity}} />
        <Menu /> 
      </Root>   
        
        
     

  
  
    );
  } 
}
export default connect(mapStateToProps,mapDispatchToProps)(Homescreen);

const Root =styled.View`
  flex:1;
`;

 


const Black =styled.View`
  position:absolute;
  width:100%;
  height: 100%;
  background: black;
  opacity: 0.6;
`;


const AnimatedBlack=Animated.createAnimatedComponent(Black);


const Main =styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

const Header=styled.View`
  width: 100%;
  height: 60px;
  background: white;
`;

const  Profile =styled.Image`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 52px;
  height:52px;
  background: black;
  border-radius:25px;
`;

const Logo =styled.Text `
  margin-top:10px;
  margin-left:50px;
  color: black;
  font-size: 30px;
`;

const BackgroundImg=styled.Image`
  flex: 1;
  position: absolute;
  z-index:0;
  width:100%;
  height:100%;
  opacity:0;
`;
 
const Slogan =styled.Text`
  color: brown;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 25px;
  font-weight: 400;
`;


const BigCardContainer = styled.View`
  margin-Top: 15px;
`;

const Category=styled.Text`
  color: black;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;

`;

const BigCardData=[
  {
    mainpage: "https://lh3.googleusercontent.com/Sd0tD7CWb31a13srmnPLw-MeHEE70H82N0qRfdjAX2f2185Rv6o-IaLGEYdCIHWOTsBmnflG8rXbhDYP7_4b0L-8ZQQD2f_CjJv47p6CQ2ABIlMf48wfpwzFL0a3dStcNHZcV8br"
  },
  {
     mainpage: "https://www.templeemanuel.com/wp-content/uploads/2020/05/LessStress.jpg"
  },
  {
    mainpage: "https://www.cfs.gov.hk/english/whatsnew/whatsnew_fstr/images/lets_beat_covid_19_together_e.png"
  }
]

const MedCardContainer =styled.View`
  margin-top:10px;
`;

const MedCardData=[
  {
    lastpage:"https://easydrawingguides.com/wp-content/uploads/2017/02/How-to-draw-a-cartoon-girl-20.png" 
  },
  {
    lastpage:"https://png.pngitem.com/pimgs/s/150-1500023_teen-clipart-teenager-cartoon-teenage-girl-clipart-png.png"
  },
  {
    lastpage:"https://media.istockphoto.com/vectors/beautiful-business-lady-cartoon-business-womanflat-designvector-vector-id1087865000"
  }
]













