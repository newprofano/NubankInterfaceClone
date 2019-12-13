import React from 'react';
import {Container, TabsContainer, TabItems, TabText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({translateY}){
    return(
        <Container style={{
            transform:[
                {
                    translateY: translateY.interpolate({
                        inputRange:[0, 380],
                        outputRange:[0,30],
                        extrapolate: 'clamp'
                    })
                }
            ],

            opacity: translateY.interpolate({
                inputRange:[0,380],
                outputRange:[1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabItems>
                    <Icon name="person-add" size={24} color="#FFF"/>
                    <TabText>Indicar amigos</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
                    <TabText>Cobrar</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="arrow-downward" size={24} color="#FFF"/>
                    <TabText>Depositar</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="arrow-upward" size={24} color="#FFF"/>
                    <TabText>Transferir</TabText>
                </TabItems>
                <TabItems>
                    <Icon name="lock" size={24} color="#FFF"/>
                    <TabText>Bloquear cartão</TabText>
                </TabItems>
            </TabsContainer>
        </Container>
    )
}