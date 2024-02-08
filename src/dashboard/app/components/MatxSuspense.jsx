import { Suspense } from 'react';
import { MatxLoading } from 'dashboard/app/components';

const MatxSuspense = ({ children }) => {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
};

export default MatxSuspense;
