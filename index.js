

const form = document.getElementById('myForm');

const loadData = (e) => {

    e.preventDefault();

    const stock = document.forms['myForm']['stock'].value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d5b16ca82msh2e71ff6bd474a4ap17b70fjsne1c69e626f1e',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
    };

    fetch(`https://latest-stock-price.p.rapidapi.com/any?Identifier=${stock}`, options)
        .then(response => response.json())
        .then((response) => {
            if (response == '') {
                document.getElementById('alert').innerHTML+=`
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Oops!</strong> Please enter stock name!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
            }
            else {

                response.map((cval) => {
                    document.getElementById('sData').innerHTML+=`
                    <div class="col-md-2">
            <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${cval.identifier}</h5>
            </div>
            
            <div class="card-body">
            
            <p class="card-text"> Symbol : ${cval.symbol}</p>
            <h6 class="card-subtitle mb-2 text-muted">${cval.lastUpdateTime}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Price: ${cval.lastPrice} </li>
                <li class="list-group-item"> Change: ${cval.change} </li>
                <li class="list-group-item"> Today's High: ${cval.dayHigh} </li>
                <li class="list-group-item"> Today's Low: ${cval.dayLow} </li>
                <li class="list-group-item"> 
                <table class="table">
                <tbody>
                    <tr>
                        <td>7 days</td>
                        <td>30 days</td>
                        <td>365 days</td>
                    </tr>
                     <tr>  
                        <td>${cval.pChange}</td>
                        <td>${cval.perChange30d}</td>
                        <td>${cval.perChange365d}</td>
                    </tr>
                 </tbody>
                </table>
                </li>
                <li class="list-group-item"> Volume: ${cval.totalTradedVolume} </li>
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

form.addEventListener('submit', loadData);






