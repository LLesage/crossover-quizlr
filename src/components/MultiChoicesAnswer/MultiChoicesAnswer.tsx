import React, { useEffect, useState } from 'react';
import { AnswerOption } from '../../models/AnswerOption';
import { StyleSheet, View } from 'react-native';
import { AnswerOptionItem } from './AnswerOptionItem';
import { RevealAnswer } from '../../models/RevealAnswer';
import { Question } from '../../models/Question';
import { find } from 'lodash';

export interface MultiChoicesAnswerProps {
    question: Question;
    onItemSelected: (id: number) => void;
    answer: RevealAnswer|null;
}

export const MultiChoicesAnswer: React.FC<MultiChoicesAnswerProps> = ({ 
    question, onItemSelected, answer
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const isAnswered = question.id === answer?.id;

    const onSelectAnswer = (id: string) => {
        setSelectedAnswer(id);
        onItemSelected(question.id);
    }

    useEffect(() => {
        return setSelectedAnswer('');
    }, [])
    
    return (
        <View style={styles.container}>
            {
                question.options && question.options.length &&
                question.options.map(choice => {
                    const error = 
                        isAnswered
                        && selectedAnswer === choice.id
                        && !find(answer.correct_options, (item) => item.id === choice.id)
                    ;
                    const success = 
                        isAnswered 
                        && !!find(answer.correct_options, (item) => item.id === choice.id)
                    ;
                    return <AnswerOptionItem 
                        answerOption={choice}
                        key={choice.id} 
                        onItemSelected={() => onSelectAnswer(choice.id)}
                        isSelectedAnswer={
                            isAnswered && selectedAnswer === choice.id
                        }
                        error={error}
                        success={success}
                    />
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
});