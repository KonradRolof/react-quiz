import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { decrementSteps, getQuizResults, resetQuestionAnswers, resetSteps } from '../actions';
import QuestionInterface from '../interfaces/question.interface';
import ResultInterface from '../interfaces/result.interface';
import QuizResultInterface from '../interfaces/quiz-result.interface';
import './ResultsPanel.scss';
import { ReactComponent as ThreeDots } from '../assets/three-dots.svg';
import UserResultsApiService from "../services/user-results-api.service";

type ResultsPanelProps = {
  questions: Array<QuestionInterface>|null;
  quizResults: Array<QuizResultInterface>|null;
  steps: number;
  onDecrementSteps: Function;
  onGetQuizResults: Function;
  onResetQuestionAnswers: Function;
  onResetSteps: Function;
  t?: any;
}

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export class ResultsPanel extends Component<ResultsPanelProps, any>{
  private dataPosted = false;
  public userResultsApiService = new UserResultsApiService();

  componentDidMount() {
    if (null === this.props.quizResults ) {
      this.props.onGetQuizResults();
    }
  }

  getResults(): Array<ResultInterface> {
    const { questions } = this.props;
    const results = [] as Array<ResultInterface>;

    if (questions !== null) {
      questions.forEach((question) => {
        const selectedAnswer = question.answers.find((answer) => answer.isActive);

        if (selectedAnswer) {
          const answerIndex = question.answers.indexOf(selectedAnswer);
          const existingResult = results.find((result) => result.answerIndex === answerIndex);

          if (existingResult) {
            existingResult.count += 1;
          } else {
            const answerResult = {
              answerIndex,
              answerChar: chars[answerIndex],
              count: 1
            } as ResultInterface;
            results.push(answerResult);
          }
        }
      });
    }

    return results;
  }

  postUserResults() {
    const { questions } = this.props;

    if (null !== questions && !this.dataPosted) {
      this.userResultsApiService
        .post(questions)
        .then((response) => console.info(response))
        .catch((error) => console.error(error));
      this.dataPosted = true;
    }
  }

  render() {
    const { t, quizResults } = this.props;
    const results = this.getResults();
    let resultText = t('Sorry, There was an error loading the result.');

    results.sort((a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
      return 0;
    });

    if (quizResults) {
      const reachedResult = quizResults
        .find((result) => result.letter === results[0].answerChar);

      if (reachedResult) {
        resultText = reachedResult.description;
      }
    }

    return (
      <div className="Results-panel">
        <div className="Results-panel__title">{ t('Finished!') }</div>
        <div className="Results-panel__label">{ t('This is your result') }:</div>
        { quizResults !== null ? (
          <div className="Results-panel__result">
            { this.postUserResults() }
            { resultText }
            <div className="Results-panel__footer">
              <button
                type='button'
                className='Results-panel__reset'
                onClick={() => {
                  this.props.onResetQuestionAnswers();
                  this.props.onResetSteps();
                }}
              >
                { t('Restart Quiz') }
              </button>
            </div>
          </div>
        ) : (
          <div className="Results-panel__loader">
            <ThreeDots />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions as Array<QuestionInterface>,
    quizResults: state.quizResults as Array<QuizResultInterface>,
    steps: state.steps
  }
};

const mapDispatchToProps = {
  onDecrementSteps: decrementSteps,
  onGetQuizResults: getQuizResults,
  onResetQuestionAnswers: resetQuestionAnswers,
  onResetSteps: resetSteps,
};

export default withTranslation('krq')(connect(mapStateToProps, mapDispatchToProps)(ResultsPanel));
