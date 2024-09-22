import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const { getByText } = render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    
    const menuItem = getByText('Your notifications'); // Adjust based on your actual menu item text
    fireEvent.click(menuItem);
    
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const { getByText } = render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    
    const closeButton = getByText('Close'); // Adjust based on your actual close button text
    fireEvent.click(closeButton);
    
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('renders the notifications when displayDrawer is true', () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument(); // Adjust based on your actual content
  });

  it('does not render the notifications when displayDrawer is false', () => {
    const { queryByText } = render(<Notifications displayDrawer={false} />);
    expect(queryByText('Here is the list of notifications')).not.toBeInTheDocument(); // Adjust based on your actual content
  });
});
