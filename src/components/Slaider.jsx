import { useState } from 'react'

const Slaider = ({image}) => {
    const [number, setNumber] = useState(0)
    const back = () => number && setNumber(number - 1)
    const next = () => number < image.length - 1 && setNumber(number + 1)

    return(
        <>
        {!(number == image.length - 1)
        ? <div className="main_cute"><div className="image-div_cute"><img className="image" src={image[number]}/></div>
        <div className="button-div_cute">
            <div className="button_cute" onClick={back}>BACK</div>
            <div className="pages_cute">{number + 1}/{image.length}</div>
            <div className="button_cute" onClick={next}>NEXT</div>
        </div>
        <center>
        <h1 className='h_cute'>YOU WILL LIVE</h1>
        </center></div>
        : <div className="main"><div className="image-div"><img className="image" src={image[number]}/></div>
        <div className="button-div">
            <div className="button" onClick={back}>BACK</div>
            <div className="pages">{number + 1}/{image.length}</div>
            <div className="button" onClick={next}>NEXT</div>
        </div>
        <center>
        <h1>YOU WILL DIE</h1>
        </center></div>}
        </>
    )
}

export default Slaider