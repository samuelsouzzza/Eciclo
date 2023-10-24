import React from 'react';

type HeadProps = {
  title: string;
  description?: string;
};

export const HeadName = (props: HeadProps): null => {
  React.useEffect(() => {
    document.title = props.title;
    if (props.description)
      document
        ?.querySelector("meta[name='description']")
        ?.setAttribute('content', props.description);
  }, [props]);

  return null;
};
