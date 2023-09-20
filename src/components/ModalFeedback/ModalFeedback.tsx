import React from 'react';
import { Wrapper, Container } from './ModalFeedback.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';

type ModalFeedbackProps = React.ComponentProps<'div'> & {
  message: string;
  onClose: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ModalFeedback = ({
  message,
  onClose,
  ...props
}: ModalFeedbackProps) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Wrapper>
      <Container {...props}>
        <p style={{ textAlign: 'center', padding: '0 0 1% 0' }}>{message}</p>
        <PrimaryButton content='Ok' onClick={() => onClose(null)} />
      </Container>
    </Wrapper>
  );
};
