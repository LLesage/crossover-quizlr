import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import { QuestionCard } from '../../components/question/QuestionCard';
import { useQuestion } from '../../hooks/use-question';

export const Following: React.FC = ({}) => {
    const { flashcardQuestions, addFlashcardQuestion } = useQuestion();

    useEffect(() => {
        addFlashcardQuestion(2);
    }, []);
    
    return (
        <View style={styles.container}>
            {
                flashcardQuestions && flashcardQuestions.length ?
                <FlatList 
                    data={flashcardQuestions}
                    renderItem={({ item }) => (
                        <QuestionCard question={item} key={item.id} />
                    )}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={Dimensions.get('window').height - 180}
                    snapToAlignment='start'
                    decelerationRate={"fast"}
                    onEndReached={() => addFlashcardQuestion()}
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