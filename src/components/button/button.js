import clsx from "clsx";

const Button = ({ type, text, onClick, actionButton, bgColor, ...props }) => {
    return (
        <div>
            <button
                onClick={onClick}
                type={type}
                className={
                    clsx(
                        actionButton && 'text-white hover:bg-blue-800 focus:ring-4 font-medium founded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
                        `${bgColor} hover:${bgColor} font-medium founded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
                    )
                }
            >
                {text}
            </button>
        </div>
    )
}

export default Button;