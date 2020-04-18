import React from 'react';
import { render } from '@testing-library/react';
import { Quiz } from './Quiz';

it('renders intro title', () => {
  const { getByText } = render(<Quiz
    questions={null}
    steps={0}
    onGetQuestions={() => {}}
    onSelectQuestionAnswer={() => {}}
    onDecrementSteps={() => {}}
    onIncrementSteps={() => {}}
  />);
  const titleElement = getByText(/My Quiz/i);
  expect(titleElement).toBeInTheDocument();
});
