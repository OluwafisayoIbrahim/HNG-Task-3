'use client';

const Button = ({ 
  children, 
  onClick, 
  href = "/", 
  type = "button",
  className = "",
  disabled = false 
}) => {
  const baseStyles = `
    flex flex-row justify-center items-center
    sm:px-4 sm:py-3 sm:w-[141px] sm:h-[44px] sm:gap-2
    xl:px-6 xl:py-4 xl:w-[169px] xl:h-[52px] xl:gap-2
    bg-white border border-[rgba(213,234,0,0.1)] rounded-xl
    transition-all duration-300 hover:scale-105
  `;

  const textStyles = `
    font-jeju font-normal uppercase text-[#0A0C11] flex items-center
    whitespace-nowrap
    sm:text-sm sm:leading-5
    xl:text-base xl:leading-5
    relative
  `;

  const underlineStyles = `
    absolute bottom-[-2px] left-0 w-full h-[1px] bg-[#0A0C11] scale-x-0 transition-transform duration-300
    group-hover:scale-x-100
  `;

  if (href) {
    return (
      <a 
        href={href} 
        className={`group ${baseStyles} ${className}`}
      >
        <span className={textStyles}>
          {children}
          <span className={underlineStyles}></span>
        </span>
        <span className="text-lg">→</span> 
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      <span className={textStyles}>
        {children}
      </span>
      <span className="text-lg">→</span>
    </button>
  );
};

export default Button;
