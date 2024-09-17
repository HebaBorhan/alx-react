import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
    return (
        <li data={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    html: { __html: '' },
    value: '',
};

export default NotificationItem;
