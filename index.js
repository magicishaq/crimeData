function runScript () {
    const location = 'Birmingham'; //turn into function 
    const api = `1b4d147a771b3fdaab5cbdcb7fe437d4`; 
   


    async function destinationResults (url) {
        var response = await fetch(url);     
        return response.json(); 
    }

    function runPromise (location) {
        location = location.replace(/\s/g, "");
        const LOCATIONURL = `http://api.positionstack.com/v1/forward?access_key=${api}&query=${location}`
        return (destinationResults(LOCATIONURL).then(({data}) => {
            const [first, second, third, ...rest] = data; 
            const lat = first.latitude; 
            const lng = first.longitude; 
            const name = first.label;
            const POLICEURL = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`; 
            return destinationResults(POLICEURL); 
    
        }).then((data) => {
            var num = 1
            var numberOfCrimes = data.reduce((elm, acc)=> {
                var category = acc.category; 
                if(!elm[acc.category]){
                    elm[acc.category] = 1
                }else{
                    elm[acc.category] ++
                }
                return elm          
            }, {})
            return numberOfCrimes
        }).then((numberOfCrimes) => {

            var container = document.querySelector('.crime-container'); 
            var div = Object.keys(numberOfCrimes).map((elm) => {
                var crimeDiv = document.createElement('div');
                crimeDiv.classList.add('crime');
                var textNode = document.createTextNode(`${elm} ${numberOfCrimes[elm]} `); 
                crimeDiv.appendChild(textNode)
                return (
                    crimeDiv
                )
            }); 

            div.forEach(elm => {
                container.appendChild(elm)
            })

        }).catch(() => {
            console.log('error occuredx')
        }))
    }

    document.addEventListener('click', (event) => {
        if(event.target == document.getElementById('search')){
            var inputText = document.getElementById('input').value; 
           runPromise(inputText);  
        }
    })




}




document.addEventListener('DOMContentLoaded', runScript)





