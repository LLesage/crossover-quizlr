import React, { useState } from 'react';
import { Question } from '../models/Question';
import { axiosInstance } from '../api/config/axios';
import { find } from 'lodash';

export const useQuestion = () => {
    const [flashcardQuestions, setFlashcardQuestions] = useState<Question[]>([]);
    const [mcqQuestions, setMcqQuestions] = useState<Question[]>([]);

    const fetchFlashcardQuestions = async (): Promise<Question|null> => {
        try {
            const response = await axiosInstance.get('/following');
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            return null;
        }
    }

    const fetchMcqQuestions = async (): Promise<Question|null> => {
        try {
            const response = await axiosInstance.get('/for_you');
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            return null;
        }
    }

    const addFlashcardQuestion = async (count: number = 1) => {
        let newQuestions = [];
        while (newQuestions.length < count) {
            const newQuestion = await fetchFlashcardQuestions();
            if (newQuestion && !find(flashcardQuestions, (item: Question) => item.id === newQuestion.id)) {
                newQuestions.push(newQuestion);
            }
        }
        setFlashcardQuestions([
            ...flashcardQuestions,
            ...newQuestions
        ]);
    }

    const addMcqQuestion = async (count: number = 1) => {
        let newQuestions = [];
        while (newQuestions.length < count) {
            const newQuestion = await fetchMcqQuestions();
            if (newQuestion && !find(mcqQuestions, (item: Question) => item.id === newQuestion.id)) {
                newQuestions.push(newQuestion);
            }
        }
        setMcqQuestions([
            ...mcqQuestions,
            ...newQuestions
        ]);
    }

    const revealAnswer = async (questionId: number) => {
        try {
            const response = await axiosInstance.get(`reveal?id=${questionId}`);
            if (response.status === 200)
                return response.data;
            return null;
        }
        catch (e) {
            return null;
        }
    }

    return {
        flashcardQuestions,
        mcqQuestions,
        addFlashcardQuestion,
        addMcqQuestion,
        revealAnswer
    }
}