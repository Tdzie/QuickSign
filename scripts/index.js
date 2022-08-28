
const printButton = document.getElementById("printButton");
const recentSigns = document.getElementById('recentSigns');
const favoriteSigns = document.getElementById('FavoritesSigns');
const addToFavoritesButton = document.querySelector("#addToFavories")


let currentSignCount = 0;
let signHistoryArr = [];
let signFavortiesArr = [];


// Number of signs kept in recent and favorites
const limitOfSignsInFavories = 25;
const limitOfSignsInRecent = 25;

// print button event to store signs in recent
printButton.addEventListener('click', storeSignInformation);
// submit button event to store signs in favorties
addToFavoritesButton.addEventListener('click', storeSignInformationForFavorites);


// consts for get DOM elements for sign information

    const onSaleButton = document.getElementById("onSale");
    const offSaleButton = document.getElementById("notOnSale");

    const perPoundSignButton = document.getElementById("LBVisible");
    const notPerPoundSign = document.getElementById("LBNotVisible");

    const mainDescriptionInput = document.getElementById("mainDesInput");
    const altDescriptionInput = document.getElementById("altDesInput");
    const saleDateInput = document.getElementById("saleDateInput");

    const mainDescriptionSign = document.getElementById('mainDescription');
    const altDescriptionSign = document.getElementById('altDescription');
    const saleDateDescriptionSign = document.getElementById('saleDate');

    const centsLayoutButton = document.getElementById("centsLayout");
    const dollarCentsLayoutButton = document.getElementById("dolCenLayout");
    const forOneLayoutButton = document.getElementById("forLayout");
    const forTwoLayoutButton = document.getElementById("forLayoutD");
    const bogoLayoutButton = document.getElementById("boGoLayout");
    const tenfortenLayoutButton = document.getElementById("tenLayout");

    const unitTypePoundButton = document.getElementById('unitTypePound');
    const unitTypeQuartButton = document.getElementById('unitTypeQuart');
    const unitTypeEachButton = document.getElementById('unitTypeEach');
    const unitType50Button = document.getElementById('unitType50ct');
    const unitType100Button = document.getElementById('unitType100ct');
    const unitTypeOunceButton = document.getElementById('unitTypeOunce');

    const sizeInput = document.getElementById('size');
    const retailInput = document.getElementById('retailInput');
    const retailOnSign = document.getElementById('retail');
    const forAmountInput = document.getElementById('forAmount');
    const priceInput = document.getElementById('price');

    const sumbitButton = document.getElementById('submitButton');

// Create or load the recents signs from local storage.
if(localStorage.getItem('signHistory') == null)
{
    localStorage.setItem('signHistory', JSON.stringify(signHistoryArr));
}
else
{
    let unparHistory = localStorage.getItem('signHistory');
    signHistoryArr = JSON.parse(unparHistory);
}

// create/load the favorites from local storage.
if(localStorage.getItem('userFavorites') == null)
{
    localStorage.setItem('userFavorites', JSON.stringify(signFavortiesArr));
}
else
{
    let unparFavorites = localStorage.getItem('userFavorites');
    signFavortiesArr = JSON.parse(unparFavorites);
}



// ---------------------        Recent/history section ---------------------
// Function to signs to recent signs
function storeSignInformation(){

    // sale button
    let saleRadioButtons = document.getElementsByName("OnOrOffSale");
    let selectedSale = Array.from(saleRadioButtons).find(radio => radio.checked);

    // lb button
    let lbRadioButton = document.getElementsByName("LBOnOrOff");
    let lbSign = Array.from(lbRadioButton).find(radio => radio.checked);

    // descriptions
    let mainDesc = document.getElementById("mainDesInput").value;
    let altDesc = document.getElementById("altDesInput").value;
    let salesDate = document.getElementById("saleDateInput").value;

    // price layout
    let layoutRadioButtons = document.getElementsByName("layout");
    let selectedLayout = Array.from(layoutRadioButtons).find(radio => radio.checked);

    // unit type
    let unitPriceType = document.getElementsByName("toggleUnitType");
    let selectedUnitType = Array.from(unitPriceType).find(radio => radio.checked);

    // price information
    let size = document.getElementById("size").value;
    let retail = document.getElementById("retailInput").value;
    let forAmount = document.getElementById("forAmount").value;
    let salePrice = document.getElementById("price").value;

    let signInformation = [selectedSale.value, lbSign.value, mainDesc, altDesc, salesDate, selectedLayout.value, selectedUnitType.value, size, retail, forAmount, salePrice];
    

    signHistoryArr.unshift(signInformation);

    if(signHistoryArr.length > limitOfSignsInRecent){
       signHistoryArr.pop();  
    }
   
    localStorage.setItem('signHistory',JSON.stringify(signHistoryArr));

    addToRecent();
}

// Add sign to recent
function addToRecent(){
   
    let firstSign = localStorage.getItem('signHistory');
    let prasedResult = JSON.parse(firstSign);
    recentSigns.innerHTML = ""; 
    let currentIDNumber = 0;
    prasedResult.forEach(element => {
        let newP = document.createElement('P');
        newP.innerHTML = element[2];
        newP.setAttribute('id', `recentSign${currentIDNumber}`)
        newP.value = currentIDNumber;
        newP.onclick = createSignFromHistory;
        recentSigns.appendChild(newP);
        currentIDNumber++;
    });
    
}
function createSignFromHistory(){

    let signInformation = signHistoryArr[this.value];

    // sale button
    switch (signInformation[0]) {
        case 'onSale':
            onSaleButton.click();
            break;
        case 'OffSale':
            offSaleButton.click();
            break;
        default:
            break;
    }
    // per pound button
    switch (signInformation[1]) {
        case 'off':
            notPerPoundSign.click();
            break;
        case 'on':
            perPoundSignButton.click();
            break;
        default:
            break;
    }
    // Discriptions
    mainDescriptionInput.value = signInformation[2];
    mainDescriptionSign.innerHTML = signInformation[2];
    altDescriptionInput.value = signInformation[3];
    altDescriptionSign.innerHTML = signInformation[3];
    saleDateInput.value = signInformation[4];
    saleDateDescriptionSign.innerHTML = signInformation[4];
    // price layouts
    switch (signInformation[5]) {
        case 'cents':
            centsLayoutButton.click()
            break;
        case 'dollarCents':
            dollarCentsLayoutButton.click()
            break;
        case 'forOne':
            forOneLayoutButton.click()
            break;
        case 'forTwo':
            forTwoLayoutButton.click()
            break;
        case 'bogo':
            bogoLayoutButton.click()
            break;
        case 'ten':
            tenfortenLayoutButton.click()
            break;
        default:
            break;
    }

    // Unit types
    switch (signInformation[6]) {
        case 'POUND':
            unitTypePoundButton.click()
            break;
        case 'QUART':
            unitTypeQuartButton.click()
            break;
        case 'EACH':
            unitTypeEachButton.click()
            break;
        case "50 COUNT":
            unitType50Button.click()
            break;
        case "100 COUNT":
            unitType100Button.click()
            break;
        case "OUNCE":
            unitTypeOunceButton.click()
            break;
    
        default:
            break;
    }
    // price information
    sizeInput.value = signInformation[7];
    retailInput.value = signInformation[8];
    retailOnSign.innerHTML = signInformation[8];
    forAmountInput.value = signInformation[9];
    priceInput.value = signInformation[10];


    //submit button
    sumbitButton.click()
}




// --------------- FAVORITES SECTION -----------------------

// this functions stores the sign informatin into the signFavoritesArr
function storeSignInformationForFavorites(){

    // sale button
    let saleRadioButtons = document.getElementsByName("OnOrOffSale");
    let selectedSale = Array.from(saleRadioButtons).find(radio => radio.checked);

    // lb button
    let lbRadioButton = document.getElementsByName("LBOnOrOff");
    let lbSign = Array.from(lbRadioButton).find(radio => radio.checked);

    // descriptions
    let mainDesc = document.getElementById("mainDesInput").value;
    let altDesc = document.getElementById("altDesInput").value;
    let salesDate = document.getElementById("saleDateInput").value;

    // price layout
    let layoutRadioButtons = document.getElementsByName("layout");
    let selectedLayout = Array.from(layoutRadioButtons).find(radio => radio.checked);

    // unit type
    let unitPriceType = document.getElementsByName("toggleUnitType");
    let selectedUnitType = Array.from(unitPriceType).find(radio => radio.checked);

    // price information
    let size = document.getElementById("size").value;
    let retail = document.getElementById("retailInput").value;
    let forAmount = document.getElementById("forAmount").value;
    let salePrice = document.getElementById("price").value;

    let signInformation = [selectedSale.value, lbSign.value, mainDesc, altDesc, salesDate, selectedLayout.value, selectedUnitType.value, size, retail, forAmount, salePrice];
    

    signFavortiesArr.unshift(signInformation);

    if(signFavortiesArr.length > limitOfSignsInFavories){
       signFavortiesArr.pop();  
    }
   
    localStorage.setItem('userFavorites',JSON.stringify(signFavortiesArr));

    addToFavorites();
}
// this function gets infomation from local store "userFavorites" and creates the HTML p elements that is clickable.
function addToFavorites(){
   
    let favoritesArray = localStorage.getItem('userFavorites');
    let prasedResult = JSON.parse(favoritesArray);
    favoriteSigns.innerHTML = ""; 
    let currentIDNumber = 0;
    prasedResult.forEach(element => {
        let newP = document.createElement('P');
        newP.innerHTML = element[2];
        newP.setAttribute('id', `favoriteSign${currentIDNumber}`)
        newP.value = currentIDNumber;
        newP.onclick = createSignFromFavorites;
        favoriteSigns.appendChild(newP);
        currentIDNumber++;
    });
}

// This function loads the sign information from the user favorites
function createSignFromFavorites(event){

    let signInformation = signFavortiesArr[this.value];

    if(event.ctrlKey){
    let favoritesArray = localStorage.getItem('userFavorites');
    let prasedResult = JSON.parse(favoritesArray);

    prasedResult.splice(this.value,1);
    localStorage.setItem('userFavorites',JSON.stringify(prasedResult));
    location.reload();
    }
    else{
    // sale button
    switch (signInformation[0]) {
        case 'onSale':
            onSaleButton.click();
            break;
        case 'OffSale':
            offSaleButton.click();
            break;
        default:
            break;
    }
    // per pound button
    switch (signInformation[1]) {
        case 'off':
            notPerPoundSign.click();
            break;
        case 'on':
            perPoundSignButton.click();
            break;
        default:
            break;
    }
    // Discriptions
    mainDescriptionInput.value = signInformation[2];
    mainDescriptionSign.innerHTML = signInformation[2];
    altDescriptionInput.value = signInformation[3];
    altDescriptionSign.innerHTML = signInformation[3];
    saleDateInput.value = signInformation[4];
    saleDateDescriptionSign.innerHTML = signInformation[4];
    // price layouts
    switch (signInformation[5]) {
        case 'cents':
            centsLayoutButton.click()
            break;
        case 'dollarCents':
            dollarCentsLayoutButton.click()
            break;
        case 'forOne':
            forOneLayoutButton.click()
            break;
        case 'forTwo':
            forTwoLayoutButton.click()
            break;
        case 'bogo':
            bogoLayoutButton.click()
            break;
        case 'ten':
            tenfortenLayoutButton.click()
            break;
        default:
            break;
    }

    // Unit types
    switch (signInformation[6]) {
        case 'POUND':
            unitTypePoundButton.click()
            break;
        case 'QUART':
            unitTypeQuartButton.click()
            break;
        case 'EACH':
            unitTypeEachButton.click()
            break;
        case "50 COUNT":
            unitType50Button.click()
            break;
        case "100 COUNT":
            unitType100Button.click()
            break;
        case "OUNCE":
            unitTypeOunceButton.click()
            break;
    
        default:
            break;
    }
    // price information
    sizeInput.value = signInformation[7];
    retailInput.value = signInformation[8];
    retailOnSign.innerHTML = signInformation[8];
    forAmountInput.value = signInformation[9];
    priceInput.value = signInformation[10];


    //submit button
    sumbitButton.click()
}
}


    









	// Event handlers for toggle of LB on sign
    // Hide the LB div
    document.getElementById("LBNotVisible").onclick = function() {
        document.getElementById("LBOption").style.display = 'none';
	};
    // Show the LB div
    document.getElementById("LBVisible").onclick = function() {
        document.getElementById("LBOption").style.display = 'initial';
	};

    // Gobal let for unit type
    var unitTypeState = 1;
    // function to check unit type and run proper function
    function checkUnitState (a) {
            if(a == 1){
        togglePound();
            }
    else if (a == 2){
        toggleQuart();
            }
    else if (a == 3){
        toggleEach();
            }
    else if (a == 4){
        toggle50ct();
            }
    else if (a == 5){
        toggle100ct();
            }else if (a == 6){
        toggleOunce();
            }
        }
    // CODE FOR CHANGING UNIT TYPES

    // TOGGLE EACH
    function toggleEach() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let amount = document.getElementById('forAmount').value;
    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }
    let num = parseFloat(priceInput);
    let final = num.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "EACH";
    unitTypeState = 3;
        }
    // TOGGLE QUART
    function toggleQuart() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let size = document.getElementById('size').value;
    let amount = document.getElementById('forAmount').value;

    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }

    let a = (priceInput / size) * 32;
    let final = a.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "PER QUART";
    unitTypeState = 2;
        }
    // TOGGLE POUND
    function togglePound() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let size = document.getElementById('size').value;
    let amount = document.getElementById('forAmount').value;

    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }

    let a = (priceInput / size) * 16;
    let final = a.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "PER POUND";
    unitTypeState = 1;
        }
    // TOGGLE 50 ct
    function toggle50ct() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let size = document.getElementById('size').value;
    let amount = document.getElementById('forAmount').value;

    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }

    let a = (priceInput / size) * 50;
    let final = a.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "PER 50 CT";
    unitTypeState = 4;
        }
    // TOGGLE 100 ct
    function toggle100ct() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let size = document.getElementById('size').value;
    let amount = document.getElementById('forAmount').value;

    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }

    let a = (priceInput / size) * 100;
    let final = a.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "PER 100 CT";
    unitTypeState = 5;

        }
    // PER OUNCE

    function toggleOunce() {
        let bogoLayout = document.getElementById("boGoLayout").checked;
    let priceInput;
    if(bogoLayout){
        priceInput = document.getElementById('retailInput').value;
	    }else{
        priceInput = document.getElementById('price').value;
	    }
    let size = document.getElementById('size').value;
    let amount = document.getElementById('forAmount').value;

    if (priceInput % .25 == 0 && priceInput != 1) {
        priceInput = priceInput / amount;
            }

    let a = (priceInput / size);
    let final = a.toFixed(2);
    unitPriceBox.innerHTML = final;
    unitType.innerHTML = "PER OUNCE";
    unitTypeState = 6;
        }


    // CODE FOR OVERIDES
    function addMain() {
        let userInput = document.querySelector("#mainDesInput");
    let mainDescription = document.getElementById('mainDescription');

    mainDescription.innerHTML = userInput.value;
        }
    function addAlt() {
        let userAlt = document.getElementById('altDesInput');
    let altDescription = document.getElementById('altDescription');

    altDescription.innerHTML = userAlt.value;
        }
    function addDate() {
        let saleDateInput = document.getElementById('saleDateInput');
    let saleDate = document.getElementById('saleDate');

    saleDate.innerHTML = saleDateInput.value;
        }
    function addPriceBefore() {
        let mainPriceInput = document.getElementById('mainPriceInput');
    let priceBeforeDecimal = document.getElementById('priceBeforeDecimal');

    priceBeforeDecimal.innerHTML = mainPriceInput.value;
        }
    function addPriceAfter() {
        let altPriceInput = document.getElementById('altPriceInput');
    let priceAfterDecimal = document.getElementById('priceAfterDecimal');

    priceAfterDecimal.innerHTML = altPriceInput.value;
        }
    function addUnitPrice() {
        let unitPriceInput = document.getElementById('unitPriceInput');
    let unitPriceBox = document.getElementById('unitPriceBox');

    unitPriceBox.innerHTML = unitPriceInput.value;
        }
    function addUnitType() {
        let unitTypeInput = document.getElementById('unitTypeInput');
    let unitType = document.getElementById('unitType');

    unitType.innerHTML = unitTypeInput.value;
        }
    function addMustBuy() {
        let MustBuyInput = document.getElementById('MustBuyInput');
    let mustBuy = document.getElementById('MustBuyInner');

    mustBuy.innerHTML = MustBuyInput.value;
        }
    function addYouSaveMain() {
        let youSavePriceMainInput = document.getElementById('youSavePriceMainInput');
    let youSavePriceMain = document.getElementById('youSavePriceMain');

    youSavePriceMain.innerHTML = youSavePriceMainInput.value;
        }
    function addYouSaveAlt() {
        let youSavePriceAltInput = document.getElementById('youSavePriceAltInput');
    let youSavePriceAlt = document.getElementById('youSavePriceAlt');

    youSavePriceAlt.innerHTML = youSavePriceAltInput.value;
        }
    function addRetail() {
        let retailInput = document.getElementById('retailInput');
    let retail = document.getElementById('retail');

    retail.innerHTML = retailInput.value;
        }
    // NOT USED 
    function submitAll() {
        addMain();
    addAlt();
    addDate();
    addPriceBefore();
    addPriceAfter();
    addUnitPrice();
    addUnitType();
    addMustBuy();
    addYouSaveMain();
    addYouSaveAlt();
    addRetail();
        }

    // OVERIDES TOGGLE
    function toggleOff() {
        document.getElementById("overides").style.cssText = "display: none;";
        }
    function toggleOn() {
        document.getElementById("overides").style.cssText = "display: initial";
        }

    // ON SALE / OFF SALE TOGGLE
    function noSale() {
        document.getElementById("whenYouBuy").className = "noSale";
    document.getElementById("advCardDiv").className = "noSale";
    document.getElementById("youSaveBoxDiv").className = "noSale";
    document.getElementById("saleDate").className = "noSale";
    document.getElementById("saleDateInput").className = "noSale";
    document.getElementById("MustBuyInput").className = "noSale";
    document.getElementById("youSavePriceMainInput").className = "noSale";
    document.getElementById("youSavePriceAltInput").className = "noSale";
    document.getElementById("retailInput").className = "noSale";
	    

        }
    function myFunction1() {
            var x = document.getElementById("whenYouBuy");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction2() {
            var x = document.getElementById("advCardDiv");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction3() {
            var x = document.getElementById("youSaveBoxDiv");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction4() {
            var x = document.getElementById("saleDate");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction5() {
            var x = document.getElementById("saleDateInput");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction6() {
            var x = document.getElementById("MustBuyInput");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction7() {
            var x = document.getElementById("youSavePriceMainInput");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction8() {
            var x = document.getElementById("youSavePriceAltInput");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function myFunction9() {
            var x = document.getElementById("retailInput");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
        function myFunction1() {
            var x = document.getElementById("whenYouBuy");
    // If "mystyle" exist, overwrite it with "mystyle2"
    if (x.className === "noSale") {
        x.className = "sale";
            } else {
        x.className = "sale";
            }
        }
    function saleAll() {
    myFunction1();
    myFunction2();
    myFunction3();
    myFunction4();
    myFunction5();
    myFunction6();
    myFunction7();
    myFunction8();
    myFunction9();
        }


    function priceErrorCheck(priceInputString){
         if(priceInputString == 'bogo' && bogoLayoutButton.checked == true )
    {
        return false;
    }
    else if(isNaN(priceInputString) || priceInputString == '' || priceInputString == " ")
    {
        return true;
    }
    else
    {
        return false;
    }
    }


    // FUNCTION TO CHECK THE TYPE OF PRICE AND RUN AUTO FILLS
    function pickTypeOfPrice() {
        
        if(isNaN(sizeInput.value) || sizeInput.value == "")
        {
            sizeInput.value = "";
            sizeInput.style.backgroundColor = "red";
        }
        else if(isNaN(retailInput.value) || retailInput.value == "" && onSaleButton.checked)
        {
            retailInput.value = "";
            retailInput.style.backgroundColor = "red";
        }
        else if (priceErrorCheck(priceInput.value))
        {
                priceInput.value = ""; 
                priceInput.style.background = "red";
        }
        else
        {

      sizeInput.style.backgroundColor = "white";
      retailInput.style.backgroundColor = "white";
      priceInput.style.backgroundColor = "white";
        
      retailInput.value = alterPriceAddDecimal(retailInput.value);

      retailOnSign.innerHTML = retailInput.value;

      if(priceInput.value != "bogo"){
        priceInput.value = alterPriceAddDecimal(priceInput.value)
      }
   


       
        //=================== 
        // button checked status
        let cents = document.getElementById("centsLayout").checked;
        let forLayout = document.getElementById("forLayout").checked;
        let forLayoutD = document.getElementById("forLayoutD").checked;
        let bogoLayout = document.getElementById("boGoLayout").checked;
        let tenLayout = document.getElementById("tenLayout").checked;

        if (cents) {
            autoFillCent();
                }
        else if (tenLayout) {
            autoFillTen();
                }
        else if (bogoLayout) {
            autoFillBogo();
                }
        else if (forLayout || forLayoutD) {
            autoFillFor();
                }
        else {
            autoFillDolCent();
                }
    }
   }
   // price adjust 888 -> 8.88
   function alterPriceAddDecimal(price){
    let priceBeforeDecimal;
    let priceAfterDecimal;
    let fixedPrice;
    if(price.includes("."))
    {
        return price;
    }
    else if (price.length == 2 && forTwoLayoutButton.checked == false)
    {
        fixedPrice = "." + price;
        return fixedPrice;
    }
    else if(price.length == 3)
    {
        priceBeforeDecimal = price.slice(0,1);
        priceAfterDecimal = price.slice(1);
        fixedPrice = priceBeforeDecimal + "." + priceAfterDecimal;
        return fixedPrice;
    }
    else if(price.length == 4)
    {
        priceBeforeDecimal = price.slice(0,2);
        priceAfterDecimal = price.slice(2);
        fixedPrice = priceBeforeDecimal + "." + priceAfterDecimal;
        return fixedPrice;
    }
    else
    {
        return price;
    }
   }

    // ========================  AUTO FILL FUNCTIONS =================================
    //  CENTS
    function autoFillCent() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let retail = document.getElementById('retailInput').value;

    let s = (retail - price);
    let i = s.toFixed(2);
    let fin = ((price * 10) / size) * 16;
    let final = fin.toFixed(2);
    let a = price.toString().split(".")[0];
    let b = price.toString().split(".")[1];
    let c = i.toString().split(".")[0];
    let d = i.toString().split(".")[1];

    if (s < 1.00) {
        youSavePriceMain.innerHTML = "." + d;
    youSavePriceAlt.innerHTML = "";
    youSaveCents();
                
            } else {
        youSavePriceMain.innerHTML = c;
    youSavePriceAlt.innerHTML = d;
    youSaveDollars();
            }
    unitPriceBox.innerHTML = final;
    priceBeforeDecimal.innerHTML = "." + b;
    document.getElementById("whenYouBuy").style.cssText = "visibility:hidden;";
    checkUnitState(unitTypeState);
        }
    // DOLLAR AND CENTS
    function autoFillDolCent() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let retail = document.getElementById('retailInput').value;



    let s = (retail - price);
    let i = s.toFixed(2);
    let fin = (price / size) * 16;
    let final = fin.toFixed(2);
    let a = price.toString().split(".")[0];
    let b = price.toString().split(".")[1];
    let c = i.toString().split(".")[0];
    let d = i.toString().split(".")[1];

    if (s < 1.00) {
        youSavePriceMain.innerHTML = "." + d;
    youSavePriceAlt.innerHTML = "";
    youSaveCents();
            } else {
        youSavePriceMain.innerHTML = c;
    youSavePriceAlt.innerHTML = d;
    youSaveDollars();
            }
    unitPriceBox.innerHTML = final;
    priceBeforeDecimal.innerHTML = a;
    priceAfterDecimal.innerHTML = b;
    document.getElementById("whenYouBuy").style.cssText = "visibility:hidden;";
    checkUnitState(unitTypeState);
        }
    // 2/$5 AND 2/$10
    function autoFillFor() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let retail = document.getElementById('retailInput').value;
    let amount = document.getElementById('forAmount').value;

    let s = ((retail - (price / amount)) * amount);
    let i = s.toFixed(2);
    let fin = (price / size) * 16;
    let fini = (fin / amount);
    let final = fini.toFixed(2);
    let a = price.toString().split(".")[0];
    let b = price.toString().split(".")[1];
    let c = i.toString().split(".")[0];
    let d = i.toString().split(".")[1];


    if (s < 1.00) {
        youSavePriceMain.innerHTML = "." + d;
    youSavePriceAlt.innerHTML = "";
    youSaveCents();
            } else {
        youSavePriceMain.innerHTML = c;
    youSavePriceAlt.innerHTML = d;
    youSaveDollars();
            }

    document.getElementById("whenYouBuy").style.cssText = "visibility:visible;";
    priceBeforeDecimal.innerHTML = amount+"/";
    unitPriceBox.innerHTML = final;
    priceAfterDecimal.innerHTML = "$";
    pRight.innerHTML = price;
    spanWhenYouBuy.innerHTML = "BUY " + amount;
    checkUnitState(unitTypeState);
        }
    //TENFORTEN
    function autoFillTen() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let retail = document.getElementById('retailInput').value;



    let s = ((retail - price) * 10);
    let i = s.toFixed(2);
    let fin = (price / size) * 16;
    let final = fin.toFixed(2);
    let a = price.toString().split(".")[0];
    let b = price.toString().split(".")[1];
    let c = i.toString().split(".")[0];
    let d = i.toString().split(".")[1];

    if (s < 1.00) {
        youSavePriceMain.innerHTML = "." + d;
    youSavePriceAlt.innerHTML = "";
    youSaveCents();
            } else {
        youSavePriceMain.innerHTML = c;
    youSavePriceAlt.innerHTML = d;
    youSaveDollars();
            }
    document.getElementById("whenYouBuy").style.cssText = "visibility: visible;";

    unitPriceBox.innerHTML = final;
    spanWhenYouBuy.innerHTML = "BUY 10";
    checkUnitState(unitTypeState);
        }



    // BOGO
    function autoFillBogo() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('retailInput').value;
    let retail = document.getElementById('retailInput').value;



    let s = ((retail * 2)  - price);
    let i = s.toFixed(2);
    let fin = ((price / size) * 16) / 2;
    let final = fin.toFixed(2);
    let a = price.toString().split(".")[0];
    let b = price.toString().split(".")[1];
    let c = i.toString().split(".")[0];
    let d = i.toString().split(".")[1];

    if (s < 1.00) {
        youSavePriceMain.innerHTML = "." + d;
    youSavePriceAlt.innerHTML = "";
    youSaveCents();
            } else {
        youSavePriceMain.innerHTML = c;
    youSavePriceAlt.innerHTML = d;
    youSaveDollars();
            }
    document.getElementById("whenYouBuy").style.cssText = "visibility: visible;";

    unitPriceBox.innerHTML = final;
    spanWhenYouBuy.innerHTML = "BUY 2";
    checkUnitState(unitTypeState);
        }
    // LAYOUT FUNCTIONS

    function centsLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "display: none;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: right;text - align: right;width: 75%;height: 200px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = ".99";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;

        }
    function dolCenLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "font-size: 150px;float: right;width: 25 %;margin-top: -29px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: left;text - align: right;width: 75 %;height: 200px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = "2";
    priceAfterDecimal.innerHTML = "99";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }
    function forLayout() {
        document.getElementById("pRight").style.cssText = "float: right;font-size: 330px;margin-top: -238px;padding-top: 0px;text-align: right;height: 200px;";
    document.getElementById("priceAfterDecimal").style.cssText = "font-size: 150px;float: none;width: auto;margin-top: -15px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: left;text - align: right;width: 65%;height: 200px;";
    document.getElementById("forAmount").style.cssText = "visibility: visible;";

    priceBeforeDecimal.innerHTML = "2/";
    priceAfterDecimal.innerHTML = "$";
    pRight.innerHTML = "4";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }

    function forLayoutdoub() {
        document.getElementById("pRight").style.cssText = "float: right;font-size: 330px;margin-top: -238px;padding-top: 0px;text-align: right;height: 200px;";
    document.getElementById("priceAfterDecimal").style.cssText = "font-size: 150px;float: none;width: auto;margin-top: -15px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: left;text - align: right;width: 44%;height: 200px;";
    document.getElementById("forAmount").style.cssText = "visibility: visible;";
    priceBeforeDecimal.innerHTML = "2/";
    priceAfterDecimal.innerHTML = "$";
    pRight.innerHTML = "10";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }
    function tenLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "display: none;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: right;text - align: right;width: 100%;height: 200px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = "";
    unitPriceBox.innerHTML = "";
    priceAfterDecimal.innerHTML = "";
    pRight.innerHTML = "";
    var elem = document.createElement("img");
    elem.src = 'images/ten_for_ten.jpg';
    elem.setAttribute("height", "220");
    elem.setAttribute("width", "700");
    document.getElementById("priceBeforeDecimal").appendChild(elem);

    // lock in correct price
    let priceBox = document.getElementById("price");
    priceBox.value = "1";
    priceBox.disabled = true;


        }
    function boGoLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "display: none;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 330px;margin - top: -73px;padding - top: 0px;float: right;text - align: right;width: 100%;height: 200px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = "";
    unitPriceBox.innerHTML = "";
    priceAfterDecimal.innerHTML = "";
    pRight.innerHTML = "";
    var elem = document.createElement("img");
    elem.src = 'images/bogo.jpg';
    elem.setAttribute("height", "220");
    elem.setAttribute("width", "525");
    document.getElementById("priceBeforeDecimal").appendChild(elem);
    spanWhenYouBuy.innerHTML = "2";

    let priceBox = document.getElementById("price");
    priceBox.value = "bogo";
    priceBox.disabled = true;

        }
    // LAYOUT FUNCTIONS FOR YOU SAVE
    function youSaveCents() {
        document.getElementById("youSaveImg").style.cssText = "display: grid; grid-template-columns: 78px 140px 57px;";
    document.getElementById("youSavePriceAlt").style.cssText = "display: none;";
    document.getElementById("youSavePriceMain").style.cssText = "text-align: center;";
        }
    function youSaveDollars() {
        document.getElementById("youSaveImg").style.cssText = "display: grid; grid-template-columns: 78px 80px 60px 57px;";
    document.getElementById("youSavePriceAlt").style.cssText = "display: initial;";
    document.getElementById("youSavePriceMain").style.cssText = "text-align: right;";
        }
    // Code to change the sign size to C by linking a button to CSize.html
    document.getElementById("buttonToSwitchSignSizeToC").addEventListener("click", function () {
        location.href = 'CSize.html';
        })

window.onload = (event) => {
    addToRecent();
    addToFavorites();
    
};
