import clsx from 'clsx';
import PropTypes from 'prop-types';

const Card = ({ children, className, onClick, hoverable = false }) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'card',
                hoverable && 'card--hoverable',
                className
            )}
            style={{
                width: '100%', // Ensure it takes full width if needed, or handle in parent
            }}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    hoverable: PropTypes.bool,
};

export default Card;
