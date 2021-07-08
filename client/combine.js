if (typeof window.ethereum !=='undefined') {
    console.log('metamask is installed');
    }else{
    console.log('install metamask')
    document.querySelector('.magicButton').innerHTML="<a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' target='_blank'> Install Metamask</a>";
    document.querySelector('.intro').style.display='none'
    }
    
    
    const ethereumButton=document.querySelector('.magicButton');
    const showAccount= document.querySelector('.thisIsMyAccountAddress');
    const showBalance = document.querySelector('.showMyAccountBalance')
    ethereumButton.addEventListener('click',()=> {

    getAccount();
    }); 
    
    async function getAccount(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
        const account = accounts[0];
        showAccount.innerHTML=account;
       
    
        const balance = await ethereum
        .request ({
        method:'eth_getBalance',
        params:[account,"latest"],
        });
      
        const read = parseInt(balance)/10**18;
        console.log(read.toFixed(5));
        showBalance.innerHTML=read.toFixed(18);
        

        }       
    


        window.addEventListener('load', function () {
            if (typeof web3 !== 'undefined') {
                console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
                window.web3 = new Web3(web3.currentProvider);
            } else {
                console.log('No Web3 Detected... using HTTP Provider')
                window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
        })
        
        const promisify = (inner) =>
            new Promise((resolve, reject) =>
                inner((err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                })
            );
        
        async function getBalance() {
            var address, wei, balance
            address = document.getElementById("address").value;
            wei = promisify(cb => web3.eth.getBalance(address, cb))
            try {
                balance = web3.fromWei(await wei, 'ether')
                document.getElementById("output").innerHTML = balance + " ETH";
            } catch (error) {
                document.getElementById("output").innerHTML = error;
            }
        }
        async function getTokenBalance() {
            var address, contractAddress, contractABI, tokenContract, decimals, balance, name, symbol, adjustedBalance
            address = document.getElementById("address").value
            contractAddress = document.getElementById("contractAddress").value
            contractABI = TokenABI
        
            tokenContract = web3.eth.contract(contractABI).at(contractAddress)
        
            decimals = promisify(cb => tokenContract.decimals(cb))
            balance = promisify(cb => tokenContract.balanceOf(address, cb))
            name = promisify(cb => tokenContract.name(cb))
            symbol = promisify(cb => tokenContract.symbol(cb))
        
            try {
                adjustedBalance = await balance / Math.pow(10, await decimals)
                document.getElementById("output2").innerHTML = adjustedBalance;
                document.getElementById("output2").innerHTML += " " + await symbol + " (" + await name + ")";
            } catch (error) {
                document.getElementById("output2").innerHTML = error;
            }
        }
