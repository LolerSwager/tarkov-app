import { Header } from '../partials/Header';
import { Footer } from '../partials/Footer';
import { Main } from '../partials/HookExempel';

export const About = () => {
    return(
        <>
            <Header title="om os" subtitle="About" />
            <Main/>
            <Footer displayHistoryLink={true}/>
        </>
    )
}