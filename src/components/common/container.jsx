 export default function Container({ children }) {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-5 md:px-7 lg:px-22">
            {children}
        </div>
    );
}
