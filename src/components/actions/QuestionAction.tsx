import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../global/Text';

export interface QuestionActionProps {
    icon: React.ReactNode;
    label: string;
    handleClick?: () => void;
}

export const QuestionAction:React.FC<QuestionActionProps> = ({
    icon,
    label,
    handleClick
}) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={handleClick}
        >
            {icon}
            <Text style={styles.label}>{label ?? ""}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6
    },
    label: {
        fontSize: 12,
        marginTop: 4
    }
});