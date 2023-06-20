import React from 'react';
import { AnswerOption } from '../../models/AnswerOption';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../global/Text';
import Check from '../svgs/icons/Check';
import Cross from '../svgs/icons/Cross';

export interface AnswerOptionItemProps {
    answerOption: AnswerOption;
    success: boolean;
    error: boolean;
    onItemSelected: () => void;
    isSelectedAnswer: boolean;
}

export const AnswerOptionItem: React.FC<AnswerOptionItemProps> = ({ 
    answerOption, 
    onItemSelected,
    success,
    error
}) => {
    return (
        <TouchableOpacity 
            style={{
                ...styles.container,
                backgroundColor: success ? '#28B18F' : error ? '#DC5F5F' : 'rgba(255, 255, 255, 0.2)'
            }} 
            onPress={onItemSelected}
        >
            <View style={styles.answerTextContainer}>
                <Text style={styles.answerText} adjustsFontSizeToFit numberOfLines={2}>{answerOption.answer}</Text>
            </View>
            <View style={styles.iconContainer}>
            {
                success
                ?
                <Check />
                :
                error
                ?
                <Cross />
                :
                <></>
            }
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        padding: 12,
        height: 52,
        borderRadius: 8,
        marginBottom: 10
    },
    answerTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%'
    },
    answerText: {
        fontSize: 17
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '20%'
    }
});