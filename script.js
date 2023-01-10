"use strict";
let counter = 1;
function addField() {
  let container = document.getElementById("list-tab");

  let noviKamen = document.getElementById("nazivKamena").value;

  var a = document.createElement("a");

  if (noviKamen !== "") {
    a.className = "list-group-item list-group-item-action";

    $(a).attr("data-toggle", "list");
    a.href = "#list-messages" + counter;
    a.innerHTML = noviKamen;
    container.appendChild(a);
    document.getElementById("nazivKamena").value = "";
  } else {
    alert("Niste unijeli naziv kamena!");
  }

  //DRUGI CONTAINER
  let drugiContainer = document.getElementById("nav-tabContent");
  let tabela = document.createElement("div");
  if (noviKamen !== "") {
    tabela.className = "tab-pane fade col-11";
    tabela.id = "list-messages" + counter;
    tabela.role = "tabpanel";
    let unos = addForm();
    tabela.appendChild(unos);
    drugiContainer.appendChild(tabela);
  }
  counter++;
}
let novi = document.getElementById("nazivKamena");
novi.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed

    // Trigger the button element with a click
    document.getElementById("unesiNoviKamen").click();
  }
});

function addForm() {
  let forma = document.createElement("form");

  //INPUT ZAPREMINA
  let zapremina = document.createElement("input");
  zapremina.type = "number";
  zapremina.name = "zapremina" + counter;
  zapremina.id = "zapremina" + counter;
  zapremina.className = "form-control w-25";
  zapremina.setAttribute("aria-describedby", "atribut" + counter);
  zapremina.placeholder = "Unesi vrijednost:";

  //LABEL ZAPREMINA
  let zapreminaLabel = document.createElement("span");
  zapreminaLabel.id = "zapreminaAtribut" + counter;
  zapreminaLabel.className = "input-group-text w-75";
  zapreminaLabel.innerHTML = "Zapremina stijenske mase koja se minira (bloka):";

  //GROUP ZAPREMINA
  let zapreminaGroup = document.createElement("div");
  zapreminaGroup.id = "zapreminaGroup" + counter;
  zapreminaGroup.className = "input-group mb-1";

  zapreminaGroup.appendChild(zapreminaLabel);
  zapreminaGroup.appendChild(zapremina);

  //INPUT KOEFICIJENT
  let koeficijent = document.createElement("input");
  koeficijent.type = "number";
  koeficijent.name = "koeficijent" + counter;
  koeficijent.id = "koeficijent" + counter;
  koeficijent.className = "form-control";
  koeficijent.placeholder = "Unesi vrijednost:";

  //LABEL koeficijent
  let koeficijentLabel = document.createElement("span");
  koeficijentLabel.id = "koeficijentAtribut" + counter;
  koeficijentLabel.className = "input-group-text w-75";
  koeficijentLabel.innerHTML =
    "Koeficijent otpora stijene pri miniranju po Kuznecovu (8-12):";

  //GROUP koeficijent
  let koeficijentGroup = document.createElement("div");
  koeficijentGroup.id = "koeficijentGroup" + counter;
  koeficijentGroup.className = "input-group mb-1";

  koeficijentGroup.appendChild(koeficijentLabel);
  koeficijentGroup.appendChild(koeficijent);

  //INPUT VISINA
  let visina = document.createElement("input");
  visina.type = "number";
  visina.name = "visina" + counter;
  visina.id = "visina" + counter;
  visina.className = "form-control w-25";
  visina.placeholder = "Unesi vrijednost:";

  //LABEL visina
  let visinaLabel = document.createElement("span");
  visinaLabel.id = "visinaAtribut" + counter;
  visinaLabel.className = "input-group-text w-75";
  visinaLabel.innerHTML = "Visina etaže:";

  //GROUP visina
  let visinaGroup = document.createElement("div");
  visinaGroup.id = "visinaGroup" + counter;
  visinaGroup.className = "input-group mb-1";

  visinaGroup.appendChild(visinaLabel);
  visinaGroup.appendChild(visina);

  //INPUT PODBUSENJE
  let podbusenje = document.createElement("input");
  podbusenje.type = "number";
  podbusenje.name = "podbusenje" + counter;
  podbusenje.id = "podbusenje" + counter;
  podbusenje.className = "form-control w-25";
  podbusenje.placeholder = "Unesi vrijednost:";

  //LABEL podbusenje
  let podbusenjeLabel = document.createElement("span");
  podbusenjeLabel.id = "podbusenjeAtribut" + counter;
  podbusenjeLabel.className = "input-group-text w-75";
  podbusenjeLabel.innerHTML = "Podbušenje:";

  //GROUP podbusenje
  let podbusenjeGroup = document.createElement("div");
  podbusenjeGroup.id = "podbusenjeGroup" + counter;
  podbusenjeGroup.className = "input-group mb-1";

  podbusenjeGroup.appendChild(podbusenjeLabel);
  podbusenjeGroup.appendChild(podbusenje);

  //INPUT EKSPLOZIVNO
  let eksplozivno = document.createElement("input");
  eksplozivno.type = "number";
  eksplozivno.name = "eksplozivno" + counter;
  eksplozivno.id = "eksplozivno" + counter;
  eksplozivno.className = "form-control w-25";
  eksplozivno.placeholder = "Unesi vrijednost:";

  //LABEL eksplozivno
  let eksplozivnoLabel = document.createElement("span");
  eksplozivnoLabel.id = "eksplozivnoAtribut" + counter;
  eksplozivnoLabel.className = "input-group-text w-75";
  eksplozivnoLabel.innerHTML = "Eskplozivno punjenje (bez podbušenja):";

  //GROUP eksplozivno
  let eksplozivnoGroup = document.createElement("div");
  eksplozivnoGroup.id = "eksplozivnoGroup" + counter;
  eksplozivnoGroup.className = "input-group mb-1";

  eksplozivnoGroup.appendChild(eksplozivnoLabel);
  eksplozivnoGroup.appendChild(eksplozivno);

  //INPUT Ukupno
  let ukupno = document.createElement("input");
  ukupno.type = "number";
  ukupno.name = "ukupno" + counter;
  ukupno.id = "ukupno" + counter;
  ukupno.className = "form-control w-25";
  ukupno.placeholder = "Unesi vrijednost:";

  //LABEL ukupno
  let ukupnoLabel = document.createElement("span");
  ukupnoLabel.id = "ukupnoAtribut" + counter;
  ukupnoLabel.className = "input-group-text w-75";
  ukupnoLabel.innerHTML = "Ukupno eksplozivno punjenje:";

  //GROUP ukupno
  let ukupnoGroup = document.createElement("div");
  ukupnoGroup.id = "ukupnoGroup" + counter;
  ukupnoGroup.className = "input-group mb-1";

  ukupnoGroup.appendChild(ukupnoLabel);
  ukupnoGroup.appendChild(ukupno);

  //INPUT DUZINA
  let duzina = document.createElement("input");
  duzina.type = "number";
  duzina.name = "duzina" + counter;
  duzina.id = "duzina" + counter;
  duzina.className = "form-control w-25";
  duzina.placeholder = "Unesi vrijednost:";

  //LABEL duzina
  let duzinaLabel = document.createElement("span");
  duzinaLabel.id = "duzinaAtribut" + counter;
  duzinaLabel.className = "input-group-text w-75";
  duzinaLabel.innerHTML = "Dužina čepa:";

  //GROUP duzina
  let duzinaGroup = document.createElement("div");
  duzinaGroup.id = "duzinaGroup" + counter;
  duzinaGroup.className = "input-group mb-1";

  duzinaGroup.appendChild(duzinaLabel);
  duzinaGroup.appendChild(duzina);

  //INPUT RASTOJANJE
  let rastojanje = document.createElement("input");
  rastojanje.type = "number";
  rastojanje.name = "rastojanje" + counter;
  rastojanje.id = "rastojanje" + counter;
  rastojanje.className = "form-control w-25";
  rastojanje.placeholder = "Unesi vrijednost:";

  //LABEL rastojanje
  let rastojanjeLabel = document.createElement("span");
  rastojanjeLabel.id = "rastojanjeAtribut" + counter;
  rastojanjeLabel.className = "input-group-text w-75";
  rastojanjeLabel.innerHTML = "Rastojanje između bušotina u redu:";

  //GROUP rastojanje
  let rastojanjeGroup = document.createElement("div");
  rastojanjeGroup.id = "rastojanjeGroup" + counter;
  rastojanjeGroup.className = "input-group mb-1";

  rastojanjeGroup.appendChild(rastojanjeLabel);
  rastojanjeGroup.appendChild(rastojanje);

  //INPUT RASTOJANJE IZBOJNICA
  let rastojanjeIzbojnica = document.createElement("input");
  rastojanjeIzbojnica.type = "number";
  rastojanjeIzbojnica.name = "rastojanjeIzbojnica" + counter;
  rastojanjeIzbojnica.id = "rastojanjeIzbojnica" + counter;
  rastojanjeIzbojnica.className = "form-control w-25";
  rastojanjeIzbojnica.placeholder = "Unesi vrijednost:";

  //LABEL rastojanjeIzbojnica
  let rastojanjeIzbojnicaLabel = document.createElement("span");
  rastojanjeIzbojnicaLabel.id = "rastojanjeIzbojnicaAtribut" + counter;
  rastojanjeIzbojnicaLabel.className = "input-group-text w-75";
  rastojanjeIzbojnicaLabel.innerHTML = "Rastojanje između redova (izbojnica):";

  //GROUP rastojanjeIzbojnica
  let rastojanjeIzbojnicaGroup = document.createElement("div");
  rastojanjeIzbojnicaGroup.id = "rastojanjeIzbojnicaGroup" + counter;
  rastojanjeIzbojnicaGroup.className = "input-group mb-1";

  rastojanjeIzbojnicaGroup.appendChild(rastojanjeIzbojnicaLabel);
  rastojanjeIzbojnicaGroup.appendChild(rastojanjeIzbojnica);

  //INPUT KOLICINA
  let kolicina = document.createElement("input");
  kolicina.type = "number";
  kolicina.name = "kolicina" + counter;
  kolicina.id = "kolicina" + counter;
  kolicina.className = "form-control w-25";
  kolicina.placeholder = "Unesi vrijednost:";

  //LABEL kolicina
  let kolicinaLabel = document.createElement("span");
  kolicinaLabel.id = "kolicinaAtribut" + counter;
  kolicinaLabel.className = "input-group-text w-75";
  kolicinaLabel.innerHTML = "Količina eksploziva po bušotini:";

  //GROUP kolicina
  let kolicinaGroup = document.createElement("div");
  kolicinaGroup.id = "kolicinaGroup" + counter;
  kolicinaGroup.className = "input-group mb-1";

  kolicinaGroup.appendChild(kolicinaLabel);
  kolicinaGroup.appendChild(kolicina);

  //INPUT PRECNIK
  let precnik = document.createElement("input");
  precnik.type = "number";
  precnik.name = "precnik" + counter;
  precnik.id = "precnik" + counter;
  precnik.className = "form-control w-25";
  precnik.placeholder = "Unesi vrijednost:";

  //LABEL precnik
  let precnikLabel = document.createElement("span");
  precnikLabel.id = "precnikAtribut" + counter;
  precnikLabel.className = "input-group-text w-75";
  precnikLabel.innerHTML = "Prečnik krune bušenja:";

  //GROUP precnik
  let precnikGroup = document.createElement("div");
  precnikGroup.id = "precnikGroup" + counter;
  precnikGroup.className = "input-group mb-1";

  precnikGroup.appendChild(precnikLabel);
  precnikGroup.appendChild(precnik);

  //INPUT RELATIVNA
  let relativna = document.createElement("input");
  relativna.type = "number";
  relativna.name = "relativna" + counter;
  relativna.id = "relativna" + counter;
  relativna.className = "form-control w-25";
  relativna.placeholder = "Unesi vrijednost:";

  //LABEL relativna
  let relativnaLabel = document.createElement("span");
  relativnaLabel.id = "relativnaAtribut" + counter;
  relativnaLabel.className = "input-group-text w-75";
  relativnaLabel.innerHTML =
    "Relativna snaga primijenjenog eksploziva u odnosu na AN-FO:";

  //GROUP relativna
  let relativnaGroup = document.createElement("div");
  relativnaGroup.id = "relativnaGroup" + counter;
  relativnaGroup.className = "input-group mb-1";

  relativnaGroup.appendChild(relativnaLabel);
  relativnaGroup.appendChild(relativna);

  //INPUT DEVIJACIJA
  let devijacija = document.createElement("input");
  devijacija.type = "number";
  devijacija.name = "devijacija" + counter;
  devijacija.id = "devijacija" + counter;
  devijacija.className = "form-control w-25";
  devijacija.placeholder = "Unesi vrijednost:";

  //LABEL devijacija
  let devijacijaLabel = document.createElement("span");
  devijacijaLabel.id = "devijacijaAtribut" + counter;
  devijacijaLabel.className = "input-group-text w-75";
  devijacijaLabel.innerHTML = "Devijacija bušotine (0,1-0,2 m):";

  //GROUP devijacija
  let devijacijaGroup = document.createElement("div");
  devijacijaGroup.id = "devijacijaGroup" + counter;
  devijacijaGroup.className = "input-group mb-1";

  devijacijaGroup.appendChild(devijacijaLabel);
  devijacijaGroup.appendChild(devijacija);

  //DUGME
  let dugmeRacunaj = document.createElement("a");
  dugmeRacunaj.type = "button";
  dugmeRacunaj.href = "#scroll" + counter;
  dugmeRacunaj.innerHTML = "Izračunaj";
  dugmeRacunaj.className = "btn btn-warning col-6 mt-2";
  dugmeRacunaj.style.cssText = "margin-left:25%;";
  dugmeRacunaj.id = "dugmeRacunaj" + counter;
  dugmeRacunaj.setAttribute("onclick", "racunajUnos()");
  //dugmeRacunaj.onclick = racunajUnos;

  forma.appendChild(zapreminaGroup);
  forma.appendChild(koeficijentGroup);
  forma.appendChild(visinaGroup);
  forma.appendChild(podbusenjeGroup);
  forma.appendChild(eksplozivnoGroup);
  forma.appendChild(ukupnoGroup);
  forma.appendChild(duzinaGroup);
  forma.appendChild(rastojanjeGroup);
  forma.appendChild(rastojanjeIzbojnicaGroup);
  forma.appendChild(kolicinaGroup);
  forma.appendChild(precnikGroup);
  forma.appendChild(relativnaGroup);
  forma.appendChild(devijacijaGroup);
  forma.appendChild(dugmeRacunaj);
  return forma;
}
let racunajUnos = function () {
  let zapremina = Number(
    document.getElementById("zapremina" + (counter - 1)).value
  );
  let koeficijent = Number(
    document.getElementById("koeficijent" + (counter - 1)).value
  );
  let visina = Number(document.getElementById("visina" + (counter - 1)).value);
  let podbusenje = Number(
    document.getElementById("podbusenje" + (counter - 1)).value
  );
  let eksplozivno = Number(
    document.getElementById("eksplozivno" + (counter - 1)).value
  );
  let ukupno = Number(document.getElementById("ukupno" + (counter - 1)).value);
  let duzina = Number(document.getElementById("duzina" + (counter - 1)).value);
  let rastojanje = Number(
    document.getElementById("rastojanje" + (counter - 1)).value
  );
  let rastojanjeIzbojnica = Number(
    document.getElementById("rastojanjeIzbojnica" + (counter - 1)).value
  );
  let kolicina = Number(
    document.getElementById("kolicina" + (counter - 1)).value
  );
  let precnik = Number(
    document.getElementById("precnik" + (counter - 1)).value
  );
  let relativna = Number(
    document.getElementById("relativna" + (counter - 1)).value
  );
  let devijacija = Number(
    document.getElementById("devijacija" + (counter - 1)).value
  );

  //FORMULA ZA SREDNJA
  let rezultatSrednja =
    Math.round(
      (koeficijent *
        Math.pow(zapremina / kolicina, 4 / 5) *
        Math.pow(kolicina, 1 / 6) *
        Math.pow(115 / relativna, 19 / 30) +
        Number.EPSILON) *
        100
    ) / 100;
  let rezultatKoeficijent =
    Math.round(
      ((2.2 - 14 * (rastojanjeIzbojnica / precnik)) *
        Math.pow((1 + rastojanje / rastojanjeIzbojnica) / 2, 0.5) *
        (1 - devijacija / rastojanjeIzbojnica) *
        Math.pow((eksplozivno - podbusenje) / (ukupno + 0.1), 0.1) *
        (ukupno / visina) +
        Number.EPSILON) *
        100
    ) / 100;

  let rezultatKarakteristicna =
    Math.round(
      (rezultatSrednja / Math.pow(0.693, 1 / rezultatKoeficijent) +
        Number.EPSILON) *
        100
    ) / 100;

  //AKO NE POSTOJI DIV:
  if (document.getElementById("dugmeNovoLinijski" + (counter - 1))) {
    let td1 = document.getElementById("td" + (counter - 1));
    td1.innerHTML = rezultatSrednja;
    let td2 = document.getElementById("td2" + (counter - 1));
    td2.innerHTML = rezultatKoeficijent;
    let td3 = document.getElementById("td3" + (counter - 1));
    td3.innerHTML = rezultatKarakteristicna;

    //*****MODAL GRAFIKONI********

    //PODACI ZA GRAFIKON
    //LINIJSKI
    let nulaLinijski = racunajProlazak(
      0,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanLinijski = racunajProlazak(
      1,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaLinijski = racunajProlazak(
      2,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let cetiriLinijski = racunajProlazak(
      4,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let osamLinijski = racunajProlazak(
      8,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let sesnaestLinijski = racunajProlazak(
      16,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let triDvaLinijski = racunajProlazak(
      32,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let sestCetiriLinijski = racunajProlazak(
      64,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanDvaOsamLinijski = racunajProlazak(
      128,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaPetSestLinijski = racunajProlazak(
      256,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let petJedanDvaLinijski = racunajProlazak(
      512,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanNulaDvaCetiriLinijski = racunajProlazak(
      1024,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaNulaCetiriOsamLinijski = racunajProlazak(
      2048,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let cetiriNulaDevetSestLinijski = racunajProlazak(
      4096,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );

    //BAR
    let nulaBar = 0;
    let jedanBar = racunajUcesce(nulaLinijski, jedanLinijski);
    let dvaBar = racunajUcesce(jedanLinijski, dvaLinijski);
    let cetiriBar = racunajUcesce(dvaLinijski, cetiriLinijski);
    let osamBar = racunajUcesce(cetiriLinijski, osamLinijski);
    let sesnaestBar = racunajUcesce(osamLinijski, sesnaestLinijski);
    let triDvaBar = racunajUcesce(sesnaestLinijski, triDvaLinijski);
    let sestCetiriBar = racunajUcesce(triDvaLinijski, sestCetiriLinijski);
    let jedanDvaOsamBar = racunajUcesce(
      sestCetiriLinijski,
      jedanDvaOsamLinijski
    );
    let dvaPetSestBar = racunajUcesce(jedanDvaOsamLinijski, dvaPetSestLinijski);
    let petJedanDvaBar = racunajUcesce(dvaPetSestLinijski, petJedanDvaLinijski);
    let jedanNulaDvaCetiriBar = racunajUcesce(
      petJedanDvaLinijski,
      jedanNulaDvaCetiriLinijski
    );
    let dvaNulaCetiriOsamBar = racunajUcesce(
      jedanNulaDvaCetiriLinijski,
      dvaNulaCetiriOsamLinijski
    );
    let cetiriNulaDevetSestBar = racunajUcesce(
      dvaNulaCetiriOsamLinijski,
      cetiriNulaDevetSestLinijski
    );
    //KRAJ REZULTATA ZA GRAFIKON
    //MODAL Linijski
    var chartLinijski = document
      .getElementById("chartLinijski" + (counter - 1))
      .getContext("2d");
    var myChartLinijski = new Chart(chartLinijski, {
      type: "line",

      data: {
        labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
        datasets: [
          {
            label: "He= " + visina + "m",
            data: [
              nulaLinijski,
              jedanLinijski,
              dvaLinijski,
              cetiriLinijski,
              osamLinijski,
              sesnaestLinijski,
              triDvaLinijski,
              sestCetiriLinijski,
              jedanDvaOsamLinijski,
              dvaPetSestLinijski,
              petJedanDvaLinijski,
              jedanNulaDvaCetiriLinijski,
              dvaNulaCetiriOsamLinijski,
              cetiriNulaDevetSestLinijski,
            ],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.3,
      },
    });

    //CHART BAR
    var chartBar = document
      .getElementById("chartBar" + (counter - 1))
      .getContext("2d");
    var myChartBar = new Chart(chartBar, {
      type: "bar",

      data: {
        labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
        datasets: [
          {
            label: "He= " + visina + "m",

            data: [
              nulaBar,
              jedanBar,
              dvaBar,
              cetiriBar,
              osamBar,
              sesnaestBar,
              triDvaBar,
              sestCetiriBar,
              jedanDvaOsamBar,
              dvaPetSestBar,
              petJedanDvaBar,
              jedanNulaDvaCetiriBar,
              dvaNulaCetiriOsamBar,
              cetiriNulaDevetSestBar,
            ],

            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.2,
      },
    });
  } else {
    //KONTEJNER ZA PRIKAZ REZULTATA
    let kontejner = document.getElementById("list-messages" + (counter - 1));

    //DIV ZA DUGMAD
    let divZaDugmad = document.createElement("div");
    divZaDugmad.className = "col-2 mt-3";
    divZaDugmad.style.cssText = "position:fixed; top: 7%;left:80%;";

    //DUGME LINIJSKI GRAFIKON
    let dugmeNovoLinijski = document.createElement("button");
    dugmeNovoLinijski.id = "dugmeNovoLinijski" + (counter - 1);
    dugmeNovoLinijski.className = "btn btn-primary mt-3 col-12";
    dugmeNovoLinijski.innerHTML = "Prikaži linijski grafikon";
    dugmeNovoLinijski.type = "button";
    dugmeNovoLinijski.style.cssText = "height:50px;";
    dugmeNovoLinijski.setAttribute("data-toggle", "modal");
    dugmeNovoLinijski.setAttribute(
      "data-target",
      "#modalLinijski" + (counter - 1)
    );

    //MODAL ZA LINIJSKI
    //Glavni DIV koji dugme poziva
    let modalDivLinijski = document.createElement("div");
    modalDivLinijski.className = "modal fade";
    modalDivLinijski.id = "modalLinijski" + (counter - 1);
    modalDivLinijski.tabIndex = "-1";
    modalDivLinijski.role = "dialog";
    modalDivLinijski.setAttribute("aria-hidden", "true");

    //MODAL DIALOG
    let modalDialogLinijski = document.createElement("div");
    modalDialogLinijski.className = "modal-dialog modal-dialog-centered";
    modalDialogLinijski.role = "document";

    //MODAL CONTENT
    let modalContentLinijski = document.createElement("div");
    modalContentLinijski.className = "modal-content";

    //MODAL HEADER
    let modalHeaderLinijski = document.createElement("div");
    modalHeaderLinijski.className = "modal-header";
    //MODAL HEADER H5
    let modalTitleLinijski = document.createElement("h5");
    modalTitleLinijski.className = "modal-title";
    modalTitleLinijski.innerHTML = "Postotak prolaska materijala kroz sito";
    //MODAL HEADER BUTTON
    let modalCloseLinijski = document.createElement("button");
    modalCloseLinijski.className = "close";
    modalCloseLinijski.type = "button";
    modalCloseLinijski.setAttribute("data-dismiss", "modal");
    modalCloseLinijski.setAttribute("aria-label", "Close");
    modalCloseLinijski.innerHTML = "X";

    modalHeaderLinijski.appendChild(modalTitleLinijski);
    modalHeaderLinijski.appendChild(modalCloseLinijski);
    modalContentLinijski.appendChild(modalHeaderLinijski);

    //MODAL BODY
    let modalBodyLinijski = document.createElement("div");
    modalBodyLinijski.className = "modal-body";

    //MODAL BODY CHART DIV
    let modalChartLinijski = document.createElement("canvas");
    modalChartLinijski.id = "chartLinijski" + (counter - 1);
    modalChartLinijski.style.cssText = "height:170px; widht:100%";

    modalBodyLinijski.appendChild(modalChartLinijski);
    modalContentLinijski.appendChild(modalBodyLinijski);

    //MODAL Footer
    let modalFooterLinijski = document.createElement("div");
    modalFooterLinijski.className = "modal-footer";

    //MODAL FOOTER BUTTON
    let modalFooterButtonLinijski = document.createElement("button");
    modalFooterButtonLinijski.type = "button";
    modalFooterButtonLinijski.className = "btn btn-danger";
    modalFooterButtonLinijski.setAttribute("data-dismiss", "modal");
    modalFooterButtonLinijski.innerHTML = "Izađi";

    modalFooterLinijski.appendChild(modalFooterButtonLinijski);
    modalContentLinijski.appendChild(modalFooterLinijski);
    modalDialogLinijski.appendChild(modalContentLinijski);
    modalDivLinijski.appendChild(modalDialogLinijski);
    kontejner.appendChild(modalDivLinijski);

    //DUGME BAR GRAFIKON
    let dugmeNovoBar = document.createElement("button");
    dugmeNovoBar.id = "dugmeNovoBar" + (counter - 1);
    dugmeNovoBar.className = "btn btn-danger mt-3 col-12";
    dugmeNovoBar.innerHTML = "Prikaži bar grafikon";
    dugmeNovoBar.type = "button";
    dugmeNovoBar.style.cssText = "height:50px;";
    dugmeNovoBar.setAttribute("data-toggle", "modal");
    dugmeNovoBar.setAttribute("data-target", "#modalBar" + (counter - 1));

    //DODAJ DUGMAD
    divZaDugmad.appendChild(dugmeNovoLinijski);
    divZaDugmad.appendChild(dugmeNovoBar);
    kontejner.appendChild(divZaDugmad);

    //MODAL ZA BAR
    //Glavni DIV koji dugme poziva
    let modalDivBar = document.createElement("div");
    modalDivBar.className = "modal fade";
    modalDivBar.id = "modalBar" + (counter - 1);
    modalDivBar.tabIndex = "-1";
    modalDivBar.role = "dialog";
    modalDivBar.setAttribute("aria-hidden", "true");

    //MODAL DIALOG
    let modalDialogBar = document.createElement("div");
    modalDialogBar.className = "modal-dialog modal-dialog-centered";
    modalDialogBar.role = "document";

    //MODAL CONTENT
    let modalContentBar = document.createElement("div");
    modalContentBar.className = "modal-content";

    //MODAL HEADER
    let modalHeaderBar = document.createElement("div");
    modalHeaderBar.className = "modal-header";
    //MODAL HEADER H5
    let modalTitleBar = document.createElement("h5");
    modalTitleBar.className = "modal-title";
    modalTitleBar.innerHTML = "Učešće pojedinih frakcija";
    //MODAL HEADER BUTTON
    let modalCloseBar = document.createElement("button");
    modalCloseBar.className = "close";
    modalCloseBar.type = "button";
    modalCloseBar.setAttribute("data-dismiss", "modal");
    modalCloseBar.setAttribute("aria-label", "Close");
    modalCloseBar.innerHTML = "X";

    modalHeaderBar.appendChild(modalTitleBar);
    modalHeaderBar.appendChild(modalCloseBar);
    modalContentBar.appendChild(modalHeaderBar);

    //MODAL BODY
    let modalBodyBar = document.createElement("div");
    modalBodyBar.className = "modal-body";

    //MODAL BODY CHART DIV
    let modalChartBar = document.createElement("canvas");
    modalChartBar.id = "chartBar" + (counter - 1);
    modalChartBar.style.cssText = "height:150px; widht:100%";

    modalBodyBar.appendChild(modalChartBar);
    modalContentBar.appendChild(modalBodyBar);

    //MODAL Footer
    let modalFooterBar = document.createElement("div");
    modalFooterBar.className = "modal-footer";

    //MODAL FOOTER BUTTON
    let modalFooterButtonBar = document.createElement("button");
    modalFooterButtonBar.type = "button";
    modalFooterButtonBar.className = "btn btn-danger";
    modalFooterButtonBar.setAttribute("data-dismiss", "modal");
    modalFooterButtonBar.innerHTML = "Izađi";

    modalFooterBar.appendChild(modalFooterButtonBar);
    modalContentBar.appendChild(modalFooterBar);
    modalDialogBar.appendChild(modalContentBar);
    modalDivBar.appendChild(modalDialogBar);
    kontejner.appendChild(modalDivBar);

    //*****MODAL GRAFIKONI********

    //PODACI ZA GRAFIKON
    //LINIJSKI
    let nulaLinijski = racunajProlazak(
      0,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanLinijski = racunajProlazak(
      1,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaLinijski = racunajProlazak(
      2,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let cetiriLinijski = racunajProlazak(
      4,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let osamLinijski = racunajProlazak(
      8,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let sesnaestLinijski = racunajProlazak(
      16,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let triDvaLinijski = racunajProlazak(
      32,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let sestCetiriLinijski = racunajProlazak(
      64,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanDvaOsamLinijski = racunajProlazak(
      128,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaPetSestLinijski = racunajProlazak(
      256,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let petJedanDvaLinijski = racunajProlazak(
      512,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let jedanNulaDvaCetiriLinijski = racunajProlazak(
      1024,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let dvaNulaCetiriOsamLinijski = racunajProlazak(
      2048,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );
    let cetiriNulaDevetSestLinijski = racunajProlazak(
      4096,
      rezultatKoeficijent,
      rezultatKarakteristicna
    );

    //BAR
    let nulaBar = 0;
    let jedanBar = racunajUcesce(nulaLinijski, jedanLinijski);
    let dvaBar = racunajUcesce(jedanLinijski, dvaLinijski);
    let cetiriBar = racunajUcesce(dvaLinijski, cetiriLinijski);
    let osamBar = racunajUcesce(cetiriLinijski, osamLinijski);
    let sesnaestBar = racunajUcesce(osamLinijski, sesnaestLinijski);
    let triDvaBar = racunajUcesce(sesnaestLinijski, triDvaLinijski);
    let sestCetiriBar = racunajUcesce(triDvaLinijski, sestCetiriLinijski);
    let jedanDvaOsamBar = racunajUcesce(
      sestCetiriLinijski,
      jedanDvaOsamLinijski
    );
    let dvaPetSestBar = racunajUcesce(jedanDvaOsamLinijski, dvaPetSestLinijski);
    let petJedanDvaBar = racunajUcesce(dvaPetSestLinijski, petJedanDvaLinijski);
    let jedanNulaDvaCetiriBar = racunajUcesce(
      petJedanDvaLinijski,
      jedanNulaDvaCetiriLinijski
    );
    let dvaNulaCetiriOsamBar = racunajUcesce(
      jedanNulaDvaCetiriLinijski,
      dvaNulaCetiriOsamLinijski
    );
    let cetiriNulaDevetSestBar = racunajUcesce(
      dvaNulaCetiriOsamLinijski,
      cetiriNulaDevetSestLinijski
    );
    //KRAJ REZULTATA ZA GRAFIKON

    //MODAL Linijski
    var chartLinijskiKrecnjak = document
      .getElementById("chartLinijski" + (counter - 1))
      .getContext("2d");
    var myChartLinijskiKrecnjak = new Chart(chartLinijskiKrecnjak, {
      type: "line",

      data: {
        labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
        datasets: [
          {
            label: "He= " + visina + "m",
            data: [
              nulaLinijski,
              jedanLinijski,
              dvaLinijski,
              cetiriLinijski,
              osamLinijski,
              sesnaestLinijski,
              triDvaLinijski,
              sestCetiriLinijski,
              jedanDvaOsamLinijski,
              dvaPetSestLinijski,
              petJedanDvaLinijski,
              jedanNulaDvaCetiriLinijski,
              dvaNulaCetiriOsamLinijski,
              cetiriNulaDevetSestLinijski,
            ],

            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.3,
      },
    });

    //CHART BAR
    var chartBar = document
      .getElementById("chartBar" + (counter - 1))
      .getContext("2d");
    var myChartBar = new Chart(chartBar, {
      type: "bar",

      data: {
        labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
        datasets: [
          {
            label: "He= " + visina + "m",

            data: [
              nulaBar,
              jedanBar,
              dvaBar,
              cetiriBar,
              osamBar,
              sesnaestBar,
              triDvaBar,
              sestCetiriBar,
              jedanDvaOsamBar,
              dvaPetSestBar,
              petJedanDvaBar,
              jedanNulaDvaCetiriBar,
              dvaNulaCetiriOsamBar,
              cetiriNulaDevetSestBar,
            ],

            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.2,
      },
    });

    //********TABELA*********
    //DIV ZA TABELU REZULTATA
    let divPrikazRezultata = document.createElement("div");
    divPrikazRezultata.className = "table-responsive col-12";
    divPrikazRezultata.id = "tabelaPrikazRezultata" + (counter - 1);

    //TABELA REZULTATA
    let tabelaRezultat = document.createElement("table");
    tabelaRezultat.className =
      "table table-striped table-hover table-config table-bordered mt-3";

    //THEAD
    let theadRezultat = tabelaRezultat.createTHead();
    let theadRow = theadRezultat.insertRow();
    let theadTh = document.createElement("th");
    theadTh.className = "text-center";
    theadTh.colSpan = "4";
    theadTh.scope = "scope";

    let theadText = document.createTextNode("Rezultati proračuna");
    theadTh.appendChild(theadText);
    theadRow.appendChild(theadTh);

    //TBODY
    let tbodyRezultat = tabelaRezultat.createTBody();
    let rowRezultat1 = tbodyRezultat.insertRow();

    //ROW 1
    //TD 1
    let tdataRez1_1 = document.createElement("td");
    let tdataRez1_1Text = document.createTextNode(
      "Srednja veličina komada po Kuznecov za bilo koju vrstu eksploziva"
    );
    tdataRez1_1.appendChild(tdataRez1_1Text);
    rowRezultat1.appendChild(tdataRez1_1);
    //TD 2
    let tdataRez1_2 = document.createElement("td");
    let tdataRez1_2Text = document.createTextNode("X");
    tdataRez1_2.appendChild(tdataRez1_2Text);
    rowRezultat1.appendChild(tdataRez1_2);
    //TD 3
    let tdataRez1_3 = document.createElement("td");
    let tdataRez1_3Text = document.createTextNode("cm");
    tdataRez1_3.appendChild(tdataRez1_3Text);
    rowRezultat1.appendChild(tdataRez1_3);
    //TD 4
    let tdataRez1_4 = document.createElement("td");
    tdataRez1_4.id = "td" + (counter - 1);
    tdataRez1_4.innerHTML = rezultatSrednja;

    rowRezultat1.appendChild(tdataRez1_4);

    //ROW 2
    let rowRezultat2 = tbodyRezultat.insertRow();
    //TD 1
    let tdataRez2_1 = document.createElement("td");
    let tdataRez2_1Text = document.createTextNode(
      "Koeficijent ujednačenosti (Rosin-Rammler eksponent)"
    );
    tdataRez2_1.appendChild(tdataRez2_1Text);
    rowRezultat2.appendChild(tdataRez2_1);
    //TD 2
    let tdataRez2_2 = document.createElement("td");
    let tdataRez2_2Text = document.createTextNode("n");
    tdataRez2_2.appendChild(tdataRez2_2Text);
    rowRezultat2.appendChild(tdataRez2_2);
    //TD 3
    let tdataRez2_3 = document.createElement("td");
    let tdataRez2_3Text = document.createTextNode("-");
    tdataRez2_3.appendChild(tdataRez2_3Text);
    rowRezultat2.appendChild(tdataRez2_3);
    //TD 4
    let tdataRez2_4 = document.createElement("td");
    tdataRez2_4.id = "td2" + (counter - 1);
    tdataRez2_4.innerHTML = rezultatKoeficijent;
    rowRezultat2.appendChild(tdataRez2_4);

    //ROW 3
    let rowRezultat3 = tbodyRezultat.insertRow();
    //TD 1
    let tdataRez3_1 = document.createElement("td");
    let tdataRez3_1Text = document.createTextNode(
      "Karakteristična vrijednost krupnoće"
    );
    tdataRez3_1.appendChild(tdataRez3_1Text);
    rowRezultat3.appendChild(tdataRez3_1);
    //TD 2
    let tdataRez3_2 = document.createElement("td");
    tdataRez3_2.innerHTML = "x<sub>c</sub>";
    rowRezultat3.appendChild(tdataRez3_2);
    //TD 3
    let tdataRez3_3 = document.createElement("td");
    let tdataRez3_3Text = document.createTextNode("cm");
    tdataRez3_3.appendChild(tdataRez3_3Text);
    rowRezultat3.appendChild(tdataRez3_3);
    //TD 4
    let tdataRez3_4 = document.createElement("td");
    tdataRez3_4.id = "td3" + (counter - 1);
    tdataRez3_4.innerHTML = rezultatKarakteristicna;
    rowRezultat3.appendChild(tdataRez3_4);

    //PRIKAZI REZULTAT
    divPrikazRezultata.appendChild(tabelaRezultat);
    kontejner.appendChild(divPrikazRezultata);

    //Kreiraj div za scroll
    let scroll = document.createElement("div");
    scroll.id = "scroll" + (counter - 1);
    kontejner.appendChild(scroll);
    /*$("html, body").animate(
      {
        scrollTop: $("#scroll1").offset().top,
      },
      2000
    );*/
  }
};
function racunajProlazak(otvor, koeficijent, karakteristična) {
  return (
    Math.round(
      ((1 -
        Math.pow(2.718, -(otvor / Math.pow(karakteristična, koeficijent)))) *
        100 +
        Number.EPSILON) *
        100
    ) / 100
  );
}
function racunajUcesce(prolazak1, prolazak2) {
  return prolazak2 - prolazak1;
}
