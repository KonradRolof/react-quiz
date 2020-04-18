import React from 'react';
import './StepNav.scss'

type StepNavProps = {
  current: number;
  steps: Array<any>;
}

function StepNav(props: StepNavProps) {
  const { current, steps } = props;
  return (
    <div className="Quiz__steps">
      <ul className="Quiz__steps-list">
        {steps.map((step: any, index: number) => (
          <li key={ index }>
            <div className={ index === current ? 'Quiz__steps-item active' : 'Quiz__steps-item' }>
              { index + 1 }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepNav;
