import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#deb5b545'
    },
    rowStyle: {
        backgroundColor: '#f5f5f5ab'
    },
    th: {
        borderBottom: "2px solid lightgray",
        fontSize: "1rem"
    },
    thCol2: {
        textAlign: "center"
    },
    td: {
        fontSize: "1rem"
    }
});

const headerStyle = {
    backgroundColor: '#deb5b545'
};

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
};

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    return (
        <tr className={isHeader ? css(styles.headerStyle) : css(styles.rowStyle)}>
            {isHeader ?
                (textSecondCell === null ?
                    <th className={css(styles.thCol2)} colSpan={2}>{textFirstCell}</th> :
                    <>
                        <th className={css(styles.th)}>{textFirstCell}</th>
                        <th className={css(styles.th)}>{textSecondCell}</th>
                    </>
                )
                : <><td className={css(styles.td)}>{textFirstCell}</td><td>{textSecondCell}</td></>}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string || PropTypes.number
}

export default CourseListRow