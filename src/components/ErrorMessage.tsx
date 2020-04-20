import React from 'react';
import { useTranslation } from 'react-i18next';
import './ErrorMessage.scss';

type ErrorMessageProps = {
  message: string|null;
  onHide: Function;
}

function ErrorMessage(props: ErrorMessageProps) {
  // eslint-disable-next-line
  const { t, i18n } = useTranslation();
  const { message, onHide } = props;
  setTimeout(() => {
    onHide();
  }, 6000);
  return (
    <div className="Error-message">
      { '' === message ?
        t('Sorry. There was an error by loading the data from API. Please try again later.') : message }
    </div>
  )
}

export default ErrorMessage;
