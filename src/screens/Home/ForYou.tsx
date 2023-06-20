import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, ViewToken } from 'react-native';
import { QuestionCard } from '../../components/question/QuestionCard';
import { useQuestion } from '../../hooks/use-question';
import { find } from 'lodash';
import { Question } from '../../models/Question';

export const ForYou: React.FC = ({}) => {
    const { mcqQuestions, addMcqQuestion } = useQuestion();

    useEffect(() => {
        addMcqQuestion(2);
    }, [])
    
    return (
        <View style={styles.container}>
            {
                mcqQuestions && mcqQuestions.length ?
                <FlatList 
                    data={mcqQuestions}
                    renderItem={({ item }) => <QuestionCard question={item} key={item.id} />}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={Dimensions.get('window').height - 180}
                    snapToAlignment='start'
                    decelerationRate={"fast"}
                    onEndReached={() => addMcqQuestion()}
                />
                :
                <Text>Nothing to see here</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flexGrow: 1
    }
})