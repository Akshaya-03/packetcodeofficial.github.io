import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components';
import {Ionicons}from "@expo/vector-icons";
import { LinearGradient} from "expo-linear-gradient";


export default class  MedCard extends React.Component {
    render(){
       return(
           <Container >
               <LinearGradient
                    colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
                    style={{
                        position:"absolute",
                        width: "100%",
                        height: "50%",
                        top:150
                    }}
                />
                
                <View>
                    <Card2 
                        source={{
                            uri: this.props.lastpage
                        }}
                        
                    />
                </View>    
                
               
            </Container>


        );
    }
}

const Container=styled.View`
    
    width: 180px;
    height: 250px;
    margin-left: 10px;
    margin-right: 10px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
`;


const Card2 =styled.Image`
    width: 100%;
    height: 100%; 
    z-index: -5;
    
`;

