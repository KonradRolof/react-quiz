import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { decrementSteps } from "../actions";
import QuestionInterface from "../interfaces/question.interface";
import ResultInterface from '../interfaces/result.interface';
import './ResultsPanel.scss';

type ResultsPanelProps = {
  questions: Array<QuestionInterface>|null;
  steps: number;
  onDecrementSteps: Function;
  t?: any;
}

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class ResultsPanel extends Component<ResultsPanelProps, any>{
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

  render() {
    const { t } = this.props;
    const results = this.getResults();

    results.sort((a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
      return 0;
    });

    return (
      <div className="Results-panel">
        <div className="Results-panel__title">{ t('Finished!') }</div>
        <div className="Results-panel__label">{ t('This is your Result') }:</div>
        { results.map((result, index) => {
          return (
            <div key={ index }>
              { result.answerChar }: { result.count }
            </div>
          )
        }) }
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
  onDecrementSteps: decrementSteps
};

const ResultsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ResultsPanel);

export default withTranslation('krq')(ResultsPanelContainer);
