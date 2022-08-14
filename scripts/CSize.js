

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
	    }size = document.getElementById('size').value;
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
    // OVERIDES TOGGLE
    function toggleOff() {
        document.getElementById("overides").style.cssText = "display: none;";
        }
    function toggleOn() {
        document.getElementById("overides").style.cssText = "display: initial";
        }

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
    // FUNCTION TO CHECK THE TYPE OF PRICE AND RUN AUTO FILLS
    function pickTypeOfPrice() {
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
    // AUTO FILL FUNCTIONS
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
    document.getElementById("whenYouBuy").style.cssText = "visibility:hidden;";

    unitPriceBox.innerHTML = final;
    priceBeforeDecimal.innerHTML = "." + b;
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

    priceBeforeDecimal.innerHTML = amount + "/";
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
    document.getElementById("whenYouBuy").style.cssText = "visibility:visible;";

    unitPriceBox.innerHTML = final;
    spanWhenYouBuy.innerHTML = "BUY 10";
    checkUnitState(unitTypeState);
        }



    // BOGO
    function autoFillBogo() {
        let size = document.getElementById('size').value;
    let price = document.getElementById('retailInput').value;
    let retail = document.getElementById('retailInput').value;



    let s = (retail * 2)-price;
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
    document.getElementById("whenYouBuy").style.cssText = "visibility:visible;";

    unitPriceBox.innerHTML = final;
    spanWhenYouBuy.innerHTML = "BUY 2";
    checkUnitState(unitTypeState);
        }

    // layout functions
    function centsLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "display: none;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin - top: -51px;padding - top: 0px;float: left;text - align: right;width: 85%;height: 120px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = ".99";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;

        }
    function dolCenLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "font-size: 96px;float: right;width: 31%;margin - top: -32px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin - top: -51px;padding - top: 0px;float: left;text - align: right;width: 69%;height: 120px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = "2";
    priceAfterDecimal.innerHTML = "99";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }
    function forLayout() {
        document.getElementById("pRight").style.cssText = "float: right;font-size: 162px; width: 28%; margin-top: -142px;padding-top: 0px;text-align: left;height: 120px;";
    document.getElementById("priceAfterDecimal").style.cssText = "font-size: 100px;float: none;width: auto;margin - top: -35px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin - top: -51px;padding - top: 0px;float: left;text - align: right;width: 62%;height: 120px;";
    document.getElementById("forAmount").style.cssText = "visibility: visible;";

    priceBeforeDecimal.innerHTML = "2/";
    priceAfterDecimal.innerHTML = "$";
    pRight.innerHTML = "4";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }

    function forLayoutdoub() {
        document.getElementById("pRight").style.cssText = "float: right;font-size: 162px;margin-top: -142px;padding-top: 0px;text-align: left;height: 200px;width: 43%";
    document.getElementById("priceAfterDecimal").style.cssText = "font-size: 100px;float: none;width: auto;margin - top: -35px;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin - top: -51px;padding - top: 0px;float: left;text - align: right;width: 48%;height: 120px;";
    document.getElementById("forAmount").style.cssText = "visibility: visible;";
    priceBeforeDecimal.innerHTML = "2/";
    priceAfterDecimal.innerHTML = "$";
    pRight.innerHTML = "10";

    let priceBox = document.getElementById("price");
    priceBox.disabled = false;
        }
    function tenLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "visibility: visible;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin-top:-29px;padding - top: 0px;float: left;text - align: right;width: 90%;height: 120px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    priceBeforeDecimal.innerHTML = "";
    unitPriceBox.innerHTML = "";
    priceAfterDecimal.innerHTML = "";
    pRight.innerHTML = "";
    var elem = document.createElement("img");
    elem.src = 'images/ten_for_ten.jpg';
    elem.setAttribute("height", "135");
    elem.setAttribute("width", "430");
    document.getElementById("priceBeforeDecimal").appendChild(elem);
    // lock in correct price
    let priceBox = document.getElementById("price");
    priceBox.value = "1";
    priceBox.disabled = true;

        }
    function boGoLayout() {
        document.getElementById("priceAfterDecimal").style.cssText = "visibility: visible;";
    document.getElementById("priceBeforeDecimal").style.cssText = "font-size: 162px;margin-top:-29px;padding - top: 0px;float: left;text - align: right;width: 90%;height: 120px;";
    document.getElementById("pRight").style.cssText = "display: none;";
    document.getElementById("forAmount").style.cssText = "visibility:hidden;";

    let priceBox = document.getElementById("price");
    priceBox.value = "bogo";
    priceBox.disabled = true;


    priceBeforeDecimal.innerHTML = "";
    unitPriceBox.innerHTML = "";
    priceAfterDecimal.innerHTML = "";
    pRight.innerHTML = "";
    var elem = document.createElement("img");
    elem.src = 'images/bogo.jpg';
    elem.setAttribute("height", "140");
    elem.setAttribute("width", "350");
    document.getElementById("priceBeforeDecimal").appendChild(elem);


        }
    // you save layout change
    function youSaveCents() {
        document.getElementById("youSaveImg").style.cssText = "display: grid; grid-template-columns: 52px 79px 38px;";
    document.getElementById("youSavePriceAlt").style.cssText = "display: none;";
    document.getElementById("youSavePriceMain").style.cssText = "text-align: center;";
        }
    function youSaveDollars() {
        document.getElementById("youSaveImg").style.cssText = "display: grid; grid-template-columns: 52px 42px 37px 38px;";
    document.getElementById("youSavePriceAlt").style.cssText = "display: initial;";
    document.getElementById("youSavePriceMain").style.cssText = "text-align: right;";
        }
    // Code to change the sign size to B by linking a button to index.html
    document.getElementById("buttonToSwitchSignSizeToB").addEventListener("click", function () {
        location.href = 'index.html';
        })