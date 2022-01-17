export const Footer = (props) => {
    
    return(
        <footer>
            {props.displayHistoryLink && (
                <p><a href="/">&laquo; Tilbage</a></p>
            )}
        </footer>
    )
}