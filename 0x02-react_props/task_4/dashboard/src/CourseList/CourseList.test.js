import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders 5 different rows', () => {
    render(<CourseList />);
    expect(screen.getByText('Available courses')).toBeInTheDocument();
    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
});
