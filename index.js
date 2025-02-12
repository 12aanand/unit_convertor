const unitConvertor = {

    mToFe : function(meters){
        return meters * 3.28084
    },

    KiToPo : function(kilograms){
        return kilograms * 2.20462
    },

    CeToFr : function(celcius){
        return (celcius * 9/5) + 32;
    }
}

document.getElementById('button').onclick = () => {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let convert = document.getElementById('convert').value


    let convertedValue = convert === 'mToFe' ? unitConvertor.mToFe(inputValue):
                     convert === 'KiToPo' ? unitConvertor.KiToPo(inputValue):
                     unitConvertor.CeToFr(inputValue);
      
     document.getElementById('convertedValue').textContent = convertedValue.toFixed(2);             

}