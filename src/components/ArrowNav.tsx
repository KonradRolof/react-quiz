import React from 'react';
import { useTranslation  } from 'react-i18next';
import './ArrowNav.scss';

type ArrowNavProps = {
  onPrev: Function;
  onNext: Function;
  current: number;
  allowNext: boolean;
  hideNext: boolean;
}

function ArrowNav(props: ArrowNavProps) {
  //  eslint-disable-next-line
  const { t, i18n } = useTranslation('krq');
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
        { t('back') }
      </button>
      <button
        type='button'
        className={ nextClassName }
        onClick={() => onNext()}
        { ...nextOptions }
      >
        { t('next') }
      </button>
    </div>
  );
}

export default ArrowNav;
