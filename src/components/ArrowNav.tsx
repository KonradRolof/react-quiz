import React from 'react';
import './ArrowNav.scss';

type ArrowNavProps = {
  onPrev: Function;
  onNext: Function;
  current: number;
  allowNext: boolean;
  hideNext: boolean;
}

function ArrowNav(props: ArrowNavProps) {
  const { onPrev, onNext, current, allowNext, hideNext } = props;
  const prevOptions = {} as any;
  const nextOptions = {} as any;
  let prevClassName = 'Quiz__arrow Quiz__arrow--prev';
  let nextClassName = 'Quiz__arrow Quiz__arrow--next';

  if (1 === current) {
    prevClassName += ' Quiz__arrow--disabled';
    prevOptions.disabled = 'disabled';
  }

  if (!allowNext) {
    nextClassName += ' Quiz__arrow--disabled';
    nextOptions.disabled = 'disabled';
  }

  if (hideNext) {
    nextClassName += ' Quiz__arrow--hide';
  }

  return (
    <div className="Quiz__arrows">
      <button
        type='button'
        className={ prevClassName }
        onClick={() => onPrev()}
        { ...prevOptions }
      >
        zurück
      </button>
      <button
        type='button'
        className={ nextClassName }
        onClick={() => onNext()}
        { ...nextOptions }
      >
        weiter
      </button>
    </div>
  );
}

export default ArrowNav;
