import React from 'react';
import {render} from '@testing-library/react-native';

import TitleBox from '../../components/TitleBox';

describe('Title component', () => {
  it('should render title', () => {
    const {getByText} = render(<TitleBox title="objetivo" />);

    expect(getByText('objetivo')).toBeTruthy();
  });

  it('should render title and description', () => {
    const {getByText} = render(
      <TitleBox title="objetivo" description="Abrir meu próprio negócio" />,
    );

    expect(getByText('objetivo')).toBeTruthy();
    expect(getByText('Abrir meu próprio negócio')).toBeTruthy();
  });
});
