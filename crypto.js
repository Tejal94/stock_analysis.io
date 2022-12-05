
// ---Cryptocurrency start ---

const myFormCrypto = document.getElementById('myFormCrypto');

const loadCryptoData = (event) => {

    event.preventDefault();

    const crypto = document.forms['myFormCrypto']['crypto'].value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5b16ca82msh2e71ff6bd474a4ap17b70fjsne1c69e626f1e',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
        }
    };
    
    fetch(`https://binance43.p.rapidapi.com/ticker/24hr?symbol=${crypto}`, options)
        .then(response => response.json())
        .then((response) => {

            if(response == ''){
                document.getElementById('alert').innerHTML+=`
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Oops!</strong> Please enter cryptocurrency name!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
            }

            else{
                response.map((cval) => {
                    document.getElementById('cData').innerHTML+=`
                    <div class="col-md-2">
            <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${cval.symbol}</h5>
            </div>
            
            <div class="card-body">
            
            <p class="card-text"> Symbol : ${cval.symbol}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Price: ${cval.lastPrice} </li>
                <li class="list-group-item"> Change: ${cval.priceChange} </li>
                <li class="list-group-item"> Today's High: ${cval.highPrice} </li>
                <li class="list-group-item"> Today's Low: ${cval.lowPrice} </li>
                <li class="list-group-item"> 
                <table class="table">
                <tbody>
                    <tr>
                        <td>Bid Price:</td>
                        <td>Ask Price:</td>
                    </tr>
                     <tr>  
                        <td>${cval.bidPrice}</td>
                        <td>${cval.askPrice}</td>
                    </tr>
                 </tbody>
                </table>
                </li>
                <li class="list-group-item"> Volume: ${cval.volume} </li>
                <li class="list-group-item"> Volume: ${cval.count} </li>
            </ul>
            <div class="card-body">
            <a class="btn btn-success" href="#" role="button"> Buy</a>
            <a class="btn btn-danger" href="#" role="button">Sell</a>
            </div>
    </div>  
            `
                })

            }

        })

        .catch(err => console.error(err));


}


myFormCrypto.addEventListener('submit', loadCryptoData);

// ---Cryptocurrency end ---






// ---Cryptocurrency marquee start---

// const scrollValues = document.getElementById('marquee');

const toggle = document.getElementById('toggle');

const loadMarquee = () => {

    // let running = true;

    // toggle.addEventListener('click', event => {
    //         running ? marquee.stop() : marquee.start();
    //         running = !running;
    //     })
    
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5b16ca82msh2e71ff6bd474a4ap17b70fjsne1c69e626f1e',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
        }
    };
    fetch('https://binance43.p.rapidapi.com/ticker/24hr', option)
	.then(response => response.json())
	// .then((response) => {
        .then((response) => {
    //     response.map((cval) => {
        response.map((cval) => {
        document.getElementById('marquee').innerHTML+=`
        <marquee behavior="scroll" direction="left" class="marquee"> ${cval.symbol}:${cval.priceChange} </marquee>
        `
        })
    })
	.catch(err => console.error(err));
}


toggle.addEventListener('onclick', loadMarquee);

// ---Cryptocurrency ends---