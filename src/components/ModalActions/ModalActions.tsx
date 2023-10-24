import React from 'react';
import { Wrapper, Container, B } from './ModalActions.styles.ts';
import { PrimaryButton } from '../Form/PrimaryButton/PrimaryButton.tsx';
import { SecondaryButton } from '../Form/SecondaryButton/SecondaryButton.tsx';

type ModalFeedbackProps = React.ComponentProps<'div'> & {
  action: 'confirm' | 'ok';
  icon: React.ReactNode;
  message: string;
  onClose: React.Dispatch<React.SetStateAction<string | null>>;
  onConfirm?: () => void;
};

export const ModalActions = ({
  action,
  icon,
  message,
  onClose,
  onConfirm,
  ...props
}: ModalFeedbackProps) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function renderButtons(action: string): React.ReactNode {
    switch (action) {
      case 'ok':
        return <PrimaryButton content='Ok' onClick={() => onClose(null)} />;
      case 'confirm':
        return (
          <B>
            <PrimaryButton
              content='Não'
              style={{ width: '100%' }}
              onClick={() => onClose(null)}
            />
            <SecondaryButton content='Sim' onClick={onConfirm} />
          </B>
        );
    }
  }

  return (
    <Wrapper>
      <Container {...props}>
        {icon}
        <p style={{ textAlign: 'center', padding: '0 0 1% 0' }}>{message}</p>
        {renderButtons(action)}
      </Container>
    </Wrapper>
  );
};
