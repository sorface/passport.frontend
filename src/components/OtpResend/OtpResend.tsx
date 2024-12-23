import { FunctionComponent } from 'react';
import { useApiMethodCsrf } from '../../hooks/useApiMethodCsrf';
import { optApiDeclaration, OtpResendResponse } from '../../apiDeclarations';
import { Loader } from '../Loader/Loader';

import './OtpResend.css';

interface OtpResendProps {
  onOtpExpiredTimeUpdate: (otpExpiredTime: string) => void;
}

export const OtpResend: FunctionComponent<OtpResendProps> = ({ onOtpExpiredTimeUpdate }) => {
  const { apiMethodState, fetchData } = useApiMethodCsrf<OtpResendResponse, undefined>(optApiDeclaration.resend);
  const { process: { loading }, data } = apiMethodState;

  const handleResend = () => {
    fetchData(undefined);
  };

  return (
    <div className='otp-resend'>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <a
          role='button'
          className='otp-resend-button'
          onClick={handleResend}
        >
          Resend
        </a>
      )}
    </div>
  )
};
