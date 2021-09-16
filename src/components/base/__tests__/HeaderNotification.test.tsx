import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import 'jest-extended';

import HeaderNotification, { HeaderNotificationParams } from '../HeaderNotification';

describe('<HeaderNotification />', () => {
  jest.spyOn(React, 'useRef').mockImplementation(() => ({ current: {} }));
  const ref = useRef(null);
  const mockOnCloseFn = jest.fn();
  const enabledProps: HeaderNotificationParams = {
    onClose: mockOnCloseFn,
    slideAnimation: {
      ref,
      style: {
        transform: 'none',
      },
    },
  };

  it('matches snapshot', () => {
    const component = render(<HeaderNotification {...enabledProps} />);
    expect(component.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const component = render(<HeaderNotification {...enabledProps} />);
    expect(component).toBeTruthy();
  });
});
