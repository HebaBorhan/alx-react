import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem />);
  });

  it('renders correct html with type and value props', () => {
    const { getByText } = render(<NotificationItem type="default" value="test" />);
    const listItem = getByText('test');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders correct html with html prop', () => {
    const { container } = render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(container.querySelector('li').innerHTML).toBe('<u>test</u>');
  });
});
