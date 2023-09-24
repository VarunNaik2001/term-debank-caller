import axios from "axios";

// API KEY: 0ac87ffb582a30a47b4979d8ab704ae7c499929a


var config = {
  method: 'get', 
  url: 'https://pro-openapi.debank.com/v1/user/all_complex_protocol_list',
  headers: {
    'accept': 'application/json',
    'AccessKey': '0ac87ffb582a30a47b4979d8ab704ae7c499929a', 
  },
  params: {
    id: '',
    chain_ids: 'bsc,eth,matic,op,arb,avax,evmos,tlos,nova,boba,celo',
  },
};

const getPortfolioFromAddress =  async function(address) {

config.params.id = address;

let returnData = (await axios(config)).data;

return returnData;

}

getPortfolioFromAddress('0x741aa7cfb2c7bf2a1e7d4da2e3df6a56ca4131f3').then((data) =>{
    console.log(data)
})

export {getPortfolioFromAddress};