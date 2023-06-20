import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Question } from '../../models/Question';
// import { FlashCard } from './FlashCard';
import { QuestionAction } from '../actions/QuestionAction';
import Heart from '../svgs/icons/Heart';
import ChatBubble from '../svgs/icons/ChatBubble';
import Bookmark from '../svgs/icons/Bookmark';
import ShareArrow from '../svgs/icons/ShareArrow';
import FlipIcon from '../svgs/icons/FlipIcon';
import { Text } from '../global/Text';
import { FlashCard } from './FlashCard';
import { McqCard } from './McqCard';

export interface QuestionCardProps {
    question: Question
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    const [cardSide, setCardSide] = useState<'front'|'back'>('front');

    const onFlipPress = () => {
        setCardSide((side) => side === 'front' ? 'back' : 'front');
    }

    return (
        <View style={styles.cardContainer}>
            <LinearGradient colors={['#002634', '#00425A']} style={styles.cardContainer}>
                <View style={styles.container}>
                    <View style={styles.questionInfoWrapper}>
                        {
                            question.type === 'flashcard'
                            ?
                            <FlashCard question={question} cardSide={cardSide}  />
                            :
                            question.type === 'mcq'
                            ?
                            <McqCard question={question} />
                            :
                            null
                        }
                        <View style={styles.infoWrapper}>
                            <Text style={styles.userName}>{question.user.name}</Text>
                            <Text style={styles.description}>{question.description}</Text>
                        </View>
                    </View>
                    <View style={styles.actionsContainer}>
                        <QuestionAction 
                            icon={<Image source={{ uri: question.user.avatar }} style={styles.avatar} />}
                            label=''
                        />
                        <QuestionAction
                            icon={<Heart />}
                            label='87'
                        />
                        <QuestionAction
                            icon={<ChatBubble />}
                            label='2'
                        />
                        <QuestionAction
                            icon={<Bookmark />}
                            label='203'
                        />
                        <QuestionAction
                            icon={<ShareArrow />}
                            label='17'
                        />
                        <QuestionAction
                            icon={<FlipIcon />}
                            label='Flip'
                            handleClick={onFlipPress}
                        />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: Dimensions.get('window').height - 180,
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
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
    infoWrapper: {
        display: 'flex'
    },
    userName: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '600'
    },
    description: {
        fontSize: 12,
        lineHeight: 14
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
    actionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-end",
        alignItems: "center",
        width: 60,
        height: '100%'
    },
    playlistContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        height: 50,
        width: '70%',
        backgroundColor: 'blue'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderColor: '#FFF',
        borderWidth: 1
    }
});