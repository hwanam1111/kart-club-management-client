import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import 'jest-extended';
import HeaderNotification, { HeaderNotificationParams } from '../HeaderNotification';

describe('<HeaderNotification />', () => {
  jest.spyOn(React, 'useRef').mockImplementation(() => ({ current: {} }));
  it('컴포넌트 렌더링 테스트', () => {
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

    const component = render(<HeaderNotification {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});
