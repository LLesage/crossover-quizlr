import { AnswerOption } from "./AnswerOption";
import { User } from "./User";

export interface Question {
    id: number;
    type: string;
    playlist: string;
    description: string;
    question?: string;
    image?: string;
    options?: AnswerOption[];
    flashcard_front?: string;
    flashcard_back?: string;
    user: User
}