import AnswerInterface from "./answer.interface";

export default interface QuestionInterface {
    id: number|string;
    text: string;
    answers: Array<AnswerInterface>
}
