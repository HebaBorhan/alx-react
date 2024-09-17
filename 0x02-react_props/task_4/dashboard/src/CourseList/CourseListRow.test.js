import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
    const th = screen.getByText('Available courses');
    expect(th).toHaveAttribute('colSpan', '2');
  });

  it('renders two cells when isHeader is true and textSecondCell is provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
  });

  it('renders two td elements when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
  });
});
