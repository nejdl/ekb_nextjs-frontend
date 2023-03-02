const Block = ({ content, children }) =>  {

    // only return component if content is not undefined / null / empty
    if(content){
        return (
            <>
                {children}
            </>
        )
    } else {
        return null;
    }
    
}

export default Block;