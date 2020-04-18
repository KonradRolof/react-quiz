import React, { Component } from 'react';
import AnswerInterface from '../interfaces/answer.interface';
import './QuestionPanel.scss';

type QuestionPanelProps = {
  key: string;
  headline: string;
  children: any;
  answers: Array<AnswerInterface>
  isActive: boolean;
  onSelect: Function;
}

const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

class QuestionPanel extends Component<QuestionPanelProps, any> {
  constructor(props: QuestionPanelProps) {
    super(props);
    this.onSelectAnswer = this.onSelectAnswer.bind(this);
  }

  onSelectAnswer(answer: AnswerInterface): void {
    this.props.onSelect(answer);
  }

  render() {
    const { headline, children, answers, isActive } = this.props;
    return (isActive ? (
      <article className="Question-panel">
        <div className="Quiz-Question__header">
          <div className="Question-panel__title">{ headline }</div>
          { children }
        </div>
        <div className="Question-panel__answers">
          { answers.map((answer, index) => {
            let className = 'Question-panel__answer';

            if (answer.isActive) {
              className += ' active'
            }

            return (
              <div
                key={ answer.id.toString() }
                className={ className }
                onClick={() => this.onSelectAnswer(answer)}
              >
                <div className="Question-panel__answer-char">{ chars[index] }</div>
                <div className="Question-panel__answer-text">
                  { answer.text }
                </div>
              </div>
            )
          }) }
        </div>
      </article>
      ) : null)
  }
}

export default QuestionPanel;
