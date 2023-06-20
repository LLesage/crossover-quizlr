import { AnswerOption } from "./AnswerOption";

export interface RevealAnswer {
    id: number;
    correct_options: AnswerOption[];
}