import { useState } from "react";

const pountuation = () => {
    
    const [fullStar,setFullStar] = useState<number>(0) 
    const [emptyStar,setEmptyStar] = useState<number>(5)
    
    const arrayFullStar = []
    const arrayEmptyStar = []
    
    for(let i=0;emptyStar <= i; i++){
        arrayEmptyStar.push(i)
    }

    for(let i=0;fullStar <= i; i++){
        arrayFullStar.push(i)
    }

    return<div>
        <textarea></textarea>
    </div>
}

export default pountuation;
