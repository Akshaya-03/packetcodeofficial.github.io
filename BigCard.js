import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components';


export default class  BigCard extends React.Component {
    render(){
       return(
           <Container >
               <View >
                    <Card
                        source={{
                            uri:  this.props.mainpage 
                        }}
                    />

                    

                </View>
               
            </Container>


        );
    }
}

const Container = styled.View`
    width: 380px;
    height: 222px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 8px;
    margin-right: 10px;
    
`;
const Card =styled.Image`
    width: 100%;
    height: 100%;
    
`;

