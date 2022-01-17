import { useState } from 'react';

export const Main = () => {
    const [keyword, setkeyword] = useState('');

    console.log(keyword);

    return(
        <main>
            <input type="text" name="keyword" value={keyword} onChange={(e) => setkeyword(e.target.value)}/>
        </main>
    )
}