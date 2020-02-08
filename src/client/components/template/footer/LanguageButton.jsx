import React from 'react';
import { Button } from '@material-ui/core';
import { Language as LanguageIcon } from '@material-ui/icons';

const LanguageButton = () => {
  return (
    <div>
      <Button variant="outlined" color="primary" size="large">
        <LanguageIcon /> 전세계 ~~
      </Button>
    </div>
  );
};

export default LanguageButton;
