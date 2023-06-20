import React, { useState } from 'react';
import { Question } from '../../models/Question';
import { Text } from '../global/Text';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MultiChoicesAnswer } from '../MultiChoicesAnswer/MultiChoicesAnswer';
import { useQuestion } from '../../hooks/use-question';
import { RevealAnswer } from '../../models/RevealAnswer';

export interface McqCardProps {
    question: Question;
}

export const McqCard: React.FC<McqCardProps> = ({ question }) => {
    const { revealAnswer } = useQuestion();
    const [answer, setAnswer] = useState<RevealAnswer|null>(null)

    const onRevealAnswer = async () => {
        const answer = await revealAnswer(question.id);
        setAnswer(answer);
    }

    return (
        <View style={styles.container}>
            <View style={styles.questionInfoWrapper}>
                <ScrollView
                    contentContainerStyle={styles.questionContainer}
                >
                    <View style={styles.questionWrapper}>
                        <Text style={styles.questionText}>{question.question}</Text>
                    </View>
                    <View style={styles.choicesContainer}>
                        <MultiChoicesAnswer question={question} answer={answer} onItemSelected={onRevealAnswer} />
                    </View>
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
        // padding: 16,
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
    },
    questionWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    choicesContainer: {
        display: 'flex',
    }
});