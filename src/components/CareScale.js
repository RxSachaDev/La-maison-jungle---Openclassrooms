function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    function handleScale(scaleType, scaleValue) {  
        let intensity = 'beaucoup' 
        if(scaleValue === 1){
            intensity = 'peu'
        } else if (scaleValue === 2){
            intensity = 'modérément'
        }
    
        scaleType === '💧' ? alert("Cette plante requiert "+ intensity +" d'arrosage") : alert("Cette plante requiert "+ intensity +" de lumière")
    }

    return (
        <div onClick={() => handleScale(scaleType, scaleValue)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

}



export default CareScale