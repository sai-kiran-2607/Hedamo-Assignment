import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    // Base class 'btn' defined in components.css

    const variants = {
        primary: {
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            border: 'transparent',
            hover: 'var(--color-accent-hover)',
        },
        secondary: {
            backgroundColor: 'white',
            color: 'var(--color-text-secondary)',
            border: 'var(--color-border-subtle)',
            hover: 'var(--color-bg-primary)',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--color-text-secondary)',
            border: 'transparent',
            hover: 'var(--color-bg-tertiary)',
        }
    };

    const style = variants[variant] || variants.primary;

    return (
        <button
            className={clsx('btn', className)}
            style={{
                backgroundColor: style.backgroundColor,
                color: style.color,
                borderColor: style.border,
            }}
            onMouseEnter={(e) => {
                if (variant !== 'ghost') e.currentTarget.style.backgroundColor = style.hover;
                else e.currentTarget.style.backgroundColor = style.hover;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = style.backgroundColor;
            }}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
    className: PropTypes.string,
};

export default Button;
