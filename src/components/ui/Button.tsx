// import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
// }

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'md',
//   className = '',
//   ...props
// }) => {
//   const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors';

// const variants = {
//   primary: 'bg-primary text-white hover:bg-primary/90',
//   secondary: 'bg-secondary text-white hover:bg-secondary/90',
//   outline: 'border-2 border-primary text-primary hover:bg-primary/10'
// };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-2 text-base',
//     lg: 'px-8 py-2 text-lg'
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };





import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex justify-centent-center items-center text-lg font-medium tracking-wide cursor-pointer transition-all duration-500 ease-in-out rounded-lg';

  const variants = {
    primary: 'text-[#10b981] bg-transparent border-2 border-[#10b981] hover:text-white hover:shadow-[inset_0_-100px_0_0_#10b981]',
    secondary: 'text-emerald-500 bg-transparent border-2 border-[#0edcac] hover:text-white hover:shadow-[inset_0_-100px_0_0_#0edcac]',
    outline: 'text-[#0edcac] bg-transparent border-2 border-[#0edcac] hover:bg-[#0edcac] hover:text-white hover:shadow-[inset_0_-100px_0_0_#0edcac]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
