import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#deb5b545',
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4', // New style for checked row
  },
  th: {
    borderBottom: '2px solid lightgray',
    fontSize: '1rem',
  },
  thCol2: {
    textAlign: 'center',
  },
  td: {
    fontSize: '1rem',
  },
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const [isChecked, setIsChecked] = useState(false); // Hook for checkbox state

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <tr
      className={isHeader ? css(styles.headerStyle) : css(isChecked ? styles.rowChecked : styles.rowStyle)}
    >
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.thCol2)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>
            {/* Checkbox in the first cell */}
            <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
