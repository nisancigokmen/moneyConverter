// -- money converter script --

/*transactions are made over 1 euro */
const euro = document.querySelector("#formEur");

/*money converter translated countrys*/

const tr = document.querySelector("#formTr");
const usd = document.querySelector("#formUsd");
const gbp = document.querySelector("#formGbp");
const chf = document.querySelector("#formChf");
const cny = document.querySelector("#formCny");
const jpy = document.querySelector("#formJpy");
const sar = document.querySelector("#formSar");
const nok = document.querySelector("#formNok");
const dkk = document.querySelector("#formDkk");
const aud = document.querySelector("#formAud");
const cad = document.querySelector("#formCad");
const sek = document.querySelector("#formSek");
const kwd = document.querySelector("#formKwd");
const ırr = document.querySelector("#formIrr");
const rub = document.querySelector("#formRub");
const afn = document.querySelector("#formAfn");
const aoa = document.querySelector("#formAoa");
const ars = document.querySelector("#formArs");
const all = document.querySelector("#formAll");
const awg = document.querySelector("#formAwg");
const azn = document.querySelector("#formAzn");
const aed = document.querySelector("#formAed");
const bsd = document.querySelector("#formBsd");
const bhd = document.querySelector("#formBhd");

//YOU MAY WANT TO RENEW API URL. PURPOSE TO REVIEW CODE STRUCTURES. !!!

/*TRY*/
tr.addEventListener("click", change);

function change() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
            const amout = Number(euro.value);

            tr.value = rate * amout;
        }

    }
    xml.send();

}

/*USD*/

usd.addEventListener("click", change2);

function change2() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate2 = response.rates.USD;
            const amout2 = Number(euro.value);

            usd.value = rate2 * amout2;
        }

    }
    xml.send();

}

/*GBP*/

gbp.addEventListener("click", change3);

function change3() {

    const xml = new XMLHttpRequest();

    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate3 = response.rates.GBP;
            const amout3 = Number(euro.value);

            gbp.value = rate3 * amout3;
        }

    }
    xml.send();

}

/*CHF*/

chf.addEventListener("click", change4);

function change4() {

    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);
    xml.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate4 = response.rates.CHF;
            const amout4 = Number(euro.value);
            chf.value = rate4 * amout4;
        }

    }
    xml.send();

}

/*CNY */

cny.addEventListener("click", change5);

function change5() {

    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);
    xml.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate5 = response.rates.CNY;
            const amout5 = Number(euro.value);
            cny.value = rate5 * amout5;
        }

    }

    xml.send();
}


/*JPY */

jpy.addEventListener("click", change6);

function change6() {

    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);
    xml.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate6 = response.rates.JPY;
            const amout6 = Number(euro.value);
            jpy.value = rate6 * amout6;
        }

    }

    xml.send();
}


/*SAR*/

sar.addEventListener("click", change7);

function change7() {

    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);
    xml.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate7 = response.rates.SAR;
            const amout7 = Number(euro.value);
            sar.value = rate7 * amout7;
        }

    }

    xml.send();
}

/*NOK */

nok.addEventListener("click", change8);

function change8() {

    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);
    xml.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate8 = response.rates.NOK;
            const amout8 = Number(euro.value);
            nok.value = rate8 * amout8;
        }

    }

    xml.send();
}

/*DKK */
dkk.addEventListener("click", change9);

function change9() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate9 = response.rates.DKK;
            const amout9 = Number(euro.value);

            dkk.value = rate9 * amout9;
        }

    }
    xml.send();

}



/* AUD */

aud.addEventListener("click", change10);

function change10() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate10 = response.rates.AUD;
            const amout10 = Number(euro.value);

            aud.value = rate10 * amout10;
        }

    }
    xml.send();

}


/* CAD */

cad.addEventListener("click", change11);

function change11() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate11 = response.rates.CAD;
            const amout11 = Number(euro.value);

            cad.value = rate11 * amout11;
        }

    }
    xml.send();

}



/* SEK */

sek.addEventListener("click", change12);

function change12() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate12 = response.rates.SEK;
            const amout12 = Number(euro.value);

            sek.value = rate12 * amout12;
        }

    }
    xml.send();

}

/* KWD */

kwd.addEventListener("click", change13);

function change13() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate13 = response.rates.KWD;
            const amout13 = Number(euro.value);

            kwd.value = rate13 * amout13;
        }

    }
    xml.send();

}


/* IRR */

ırr.addEventListener("click", change14);

function change14() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate14 = response.rates.IRR;
            const amout14 = Number(euro.value);

            ırr.value = rate14 * amout14;
        }

    }
    xml.send();

}


/* RUB */

rub.addEventListener("click", change15);

function change15() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate15 = response.rates.RUB;
            const amout15 = Number(euro.value);

            rub.value = rate15 * amout15;
        }

    }
    xml.send();

}



/* AFN */

afn.addEventListener("click", change16);

function change16() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate16 = response.rates.AFN;
            const amout16 = Number(euro.value);

            afn.value = rate16 * amout16;
        }

    }
    xml.send();

}



/* AOA */

aoa.addEventListener("click", change17);

function change17() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate17 = response.rates.AOA;
            const amout17 = Number(euro.value);

            aoa.value = rate17 * amout17;
        }

    }
    xml.send();

}




/* ARS */


ars.addEventListener("click", change18);

function change18() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate18 = response.rates.ARS;
            const amout18 = Number(euro.value);

            ars.value = rate18 * amout18;
        }

    }
    xml.send();

}



/* ALL  */

all.addEventListener("click", change19);

function change19() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate19 = response.rates.ALL;
            const amout19 = Number(euro.value);

            all.value = rate19 * amout19;
        }

    }
    xml.send();

}



/* AWG  */

awg.addEventListener("click", change20);

function change20() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate20 = response.rates.AWG;
            const amout20 = Number(euro.value);

            awg.value = rate20 * amout20;
        }

    }
    xml.send();

}




/* AZN */

azn.addEventListener("click", change21);

function change21() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate21 = response.rates.AZN;
            const amout21 = Number(euro.value);

            azn.value = rate21 * amout21;
        }

    }
    xml.send();

}

/* AED  */

aed.addEventListener("click", change22);

function change22() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate22 = response.rates.AED;
            const amout22 = Number(euro.value);

            aed.value = rate22 * amout22;
        }

    }
    xml.send();

}

/* BSD */

bsd.addEventListener("click", change23);

function change23() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate23 = response.rates.BSD;
            const amout23 = Number(euro.value);

            bsd.value = rate23 * amout23;
        }

    }
    xml.send();

}

/*BHD */

bhd.addEventListener("click", change24);

function change24() {
    const xml = new XMLHttpRequest();
    xml.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=9a25bdde6e3f8a21ae5f875525ff1afd", true);

    xml.onload = function() {
        if (this.status) {

            const response = JSON.parse(this.responseText);
            const rate24 = response.rates.BHD;
            const amout24 = Number(euro.value);

            bhd.value = rate24 * amout24;
        }

    }
    xml.send();

}