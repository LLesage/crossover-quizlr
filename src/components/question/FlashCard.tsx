import React from 'react';
import { StyleSheet, View, Dimensions, Image, StatusBar, ScrollView } from 'react-native';
import { Question } from '../../models/Question';
import { Text } from '../global/Text';

export interface FlashCardProps {
    question: Question,
    cardSide: string,
}

export const FlashCard: React.FC<FlashCardProps> = ({ question, cardSide }) => {
    return (
        <View style={styles.container}>
            <View style={styles.questionInfoWrapper}>
                <ScrollView 
                    contentContainerStyle={
                        cardSide === 'front'
                        ? 
                        styles.questionContainer
                        :
                        styles.questionAnswerContainer
                    }
                >
                    <Text style={styles.questionText}>{question.flashcard_front}</Text>
                    {
                        cardSide === 'back' &&
                        <View style={styles.answerWrapper}>
                            <Text style={styles.answerTitle}>Answer</Text>
                            <Text style={styles.answerText} adjustsFontSizeToFit={true}>{question.flashcard_back}</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    questionInfoWrapper: {
        flex: 1,
        display: 'flex',
        padding: 16,
        alignItems: 'flex-start'
    },
    questionText: {
        fontSize: 21,
        lineHeight: 25,
        fontWeight: '400',
    },
    questionContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    questionAnswerContainer: {
        // flex: 1,
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        width: '100%',
        height: Dimensions.get('window').height * 0.6,
        overflow: 'scroll'
    },
    answerWrapper: {
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
        borderTopWidth: 2,
        marginTop: 20,
        paddingTop: 20,
        display: 'flex',
        width: '100%'
    },
    answerTitle: {
        fontWeight: '800',
        fontSize: 13,
        lineHeight: 16,
        color: '#2DC59F'
    },
    answerText: {
        fontWeight: '400',
        fontSize: 21,
        lineHeight: 25,
        color: 'rgba(255, 255, 255, 0.7)'
    },
});