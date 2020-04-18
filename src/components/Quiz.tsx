import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions, selectQuestionAnswer, incrementSteps, decrementSteps } from '../actions';
import QuestionPanel from './QuestionPanel';
import StepNav from "./StepNav";
import ArrowNav from "./ArrowNav";
import QuestionInterface from '../interfaces/question.interface';
import AnswerInterface from '../interfaces/answer.interface';
import './Quiz.scss';

type QuizProps = {
  questions: Array<QuestionInterface>;
  steps: number;
  onGetQuestions: Function;
  onSelectQuestionAnswer: Function;
  onDecrementSteps: Function;
  onIncrementSteps: Function;
}

class Quiz extends Component<QuizProps, any>{
  constructor(props: any) {
    super(props);
    this.enableNextButton = this.enableNextButton.bind(this);
    this.hideNextButton = this.hideNextButton.bind(this);
  }
  componentDidMount() {
    this.props.onGetQuestions();
  }

  enableNextButton(): boolean {
    const { questions, steps } = this.props;
    if (questions) {
      const currentQuestion = questions[steps - 1];

      if (currentQuestion) {
        return undefined !== currentQuestion.answers.find((answer) => answer.isActive);
      }
      return false
    }
    return false;
  }

  hideNextButton(): boolean {
    const { questions, steps } = this.props;
    if (questions) {
      return steps > questions.length;
    }
    return false;
  }

  render() {
    const { questions, steps } = this.props;
    const startButtonOptions = {} as any;

    if (!questions) {
      startButtonOptions.disabled = 'disabled';
    }

    return (
      <div className="Quiz">
        { 0 === steps ? (
          <div className='Quiz__front'>
            <div className="Quiz__label">Mein Quiz</div>
            <button
              type='button'
              className='Quiz__start-button'
              onClick={ this.props.onIncrementSteps }
              { ...startButtonOptions }
            >starten</button>
          </div>
        ) : null }
        { questions && 0 < steps ? (
          <div>
            { steps <= questions.length ? (
              <div>
                <StepNav current={ steps - 1 } steps={ questions } />
                <div className="Quiz__Questions">
                  { questions.map((question: QuestionInterface, index: number) => {
                    return (
                      <QuestionPanel
                        key={ question.id.toString() }
                        headline={ `Frage ${index + 1}` }
                        answers={ question.answers }
                        isActive={ index === steps - 1 }
                        onSelect={ (answer: AnswerInterface) => this.props.onSelectQuestionAnswer(question, answer) }
                      >
                        { question.text }
                      </QuestionPanel>
                    )
                  }) }
                </div>
              </div>
            ) : null }
            <ArrowNav
              onPrev={ this.props.onDecrementSteps }
              onNext={ this.props.onIncrementSteps }
              current={ steps }
              allowNext={ this.enableNextButton() }
              hideNext={ this.hideNextButton() }
            />
          </div>
        ) : null }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions as Array<QuestionInterface>,
    steps: state.steps
  }
};

const mapDispatchToProps = {
  onGetQuestions: getQuestions,
  onSelectQuestionAnswer: selectQuestionAnswer,
  onIncrementSteps: incrementSteps,
  onDecrementSteps: decrementSteps
};

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default QuizContainer;
