var menor = document.querySelector('#less_T')
var maior = document.querySelector("#more_T");
Chart.defaults.color = "#fff";
const DISPLAY = false;
var lista = []
var temperatura;

// pegando a menor temperatura


//Array para o eixo X
const eixox = [];

//Array para os termopares(linhas do gráfico)
const tipob_array = [];
const tipoe_array = [];
const tipoj_array = [];
const tipok_array = [];
const tipon_array = [];
const tipor_array = [];
const tipos_array = [];
const tipot_array = [];

//Array de coeficientes dos termopares
const coefficients_b = [
  0.0*10**0,
  -0.24650818346 * 10 ** -3,
  0.59040421171 * 10 ** -5,
  -0.13257931636 * 10 ** -8,
  0.15668291901 * 10 ** -11,
  -0.1694452924 * 10 ** -14,
  0.62990347094 * 10 ** -18,
];
const coefficients_e = [
  0.0 * 10 ** 0,
  0.5866550871 * 10 ** -1,
  0.45032275582 * 10 ** -4,
  0.28908407212 * 10 ** -7,
  -0.33056896652 * 10 ** -9,
  0.6502440327 * 10 ** -12,
  -0.19197495504 * 10 ** -15,
  -0.12536600497 * 10 ** -17,
  0.21489217569 * 10 ** -20,
  -0.14388041782 * 10 ** -23,
  0.35960899481 * 10 ** -27,
];
const coefficients_j = [
  0.0*10**0,
  0.50381187815 * 10 ** -1,
  0.304758369300 * 10 ** -4,
  -0.856810657200 * 10 ** -7,
  0.132281952950 * 10 ** -9,
  -0.170529583370 * 10 ** -12,
  0.209480906970 * 10 ** -15,
  -0.125383953360 * 10 ** -18,
  0.156317256970 * 10 ** -22
];
const coefficients_k = [
  -0.17600413686 * 10 ** -1,
  0.38921204975*10**-1,
  0.18558770032*10**-4,
  -0.99457592874*10**-7,
  0.31840945719*10**-9,
  -0.56072844889*10**-12,
  0.56075059059*10**-15,
  -0.32020720003*10**-18,
  0.97151147152*10**-22,
  -0.12104721275*10**-25,
  0.1185976 * 10 ** 0,
  -0.1183432 * 10 ** -3,
  0.1269686 * 10 ** 3,
];
const coefficients_n =[
  0.000000000000*10**00,
 0.259293946010*10**-01,
 0.157101418800*10**-04,
 0.438256272370*10**-07,
-0.252611697940*10**-09,
 0.643118193390*10**-12,
-0.100634715190*10**-14,
 0.997453389920*10**-18,
-0.608632456070*10**-21,
 0.208492293390*10**-24,
-0.306821961510*10**-28,
];
const coefficients_r =[
  0.000000000000*10**00,
 0.528961729765*10**-02,
 0.139166589782*10**-04,
-0.238855693017*10**-07,
 0.356916001063*10**-10,
-0.462347666298*10**-13,
 0.500777441034*10**-16,
-0.373105886191*10**-19,
 0.157716482367*10**-22,
-0.281038625251*10**-26,
];
const coefficients_s = [
  0.000000000000*10**0,
 0.540313308631*10**-02,
 0.125934289740*10**-04,
-0.232477968689*10**-07,
 0.322028823036*10**-10,
-0.331465196389*10**-13,
 0.255744251786*10**-16,
-0.125068871393*10**-19,
 0.271443176145*10**-23,
];
const coefficients_t = [
   0.000000000000*10**0,
 0.387481063640*10**-01,
 0.332922278800*10**-04,
 0.206182434040*10**-06,
-0.218822568460*10**-08,
 0.109968809280*10**-10,
-0.308157587720*10**-13,
 0.454791352900*10**-16,
-0.275129016730*10**-19
];


// funções que calculam a força eletromotriz (fem)
function calc_tipo_b() {
  /* criar a formula*/
  var result_b = 0;

  for (let j = 0; j < coefficients_b.length; j++) {
    fem_b = coefficients_b[j] * i ** j;
    result_b = fem_b + result_b;
  }
  tipob_array.push(result_b);
}
function calc_tipo_e() {
  var result_e = 0;

  for (let j = 0; j < coefficients_e.length; j++) {
    fem_e = coefficients_e[j] * i ** j;
    result_e = fem_e + result_e;
  }
  tipoe_array.push(result_e);
}
function calc_tipo_j() {
  var result_j = 0;
  for (let j = 0; j < coefficients_j.length; j++) {
    fem_j = coefficients_j[j] * i ** j;
    result_j = fem_j + result_j;
  }
  tipoj_array.push(result_j);
}
function calc_tipo_k() {
  var result_k = 0;
  for (let j = 0; j < coefficients_k.length-3; j++) {
    fem_k = coefficients_k[j] * i ** j +coefficients_k[10]*Math.E** ( coefficients_k[11] * (i - coefficients_k[12]) ** 2);
     result_k = fem_k + result_k
      

  }
  tipok_array.push(result_k);
}
function calc_tipo_n() {
  var result_n = 0;

  for (let j = 0; j < coefficients_n.length; j++) {
    fem_n = coefficients_n[j] * i ** j;
    result_n = fem_n + result_n;
  }
  tipon_array.push(result_n);
};
function calc_tipo_r() {
   var result_r = 0;

   for (let j = 0; j < coefficients_r.length; j++) {
     fem_r = coefficients_r[j] * i ** j;
     result_r = fem_r + result_r;
   }
   tipor_array.push(result_r);
}
function calc_tipo_s() {
  var result_s = 0;

  for (let j = 0; j < coefficients_s.length; j++) {
    fem_s = coefficients_s[j] * i ** j;
    result_s = fem_s + result_s;
  }
  tipos_array.push(result_s);
}
function calc_tipo_t() {
   var result_t = 0;

   for (let j = 0; j < coefficients_t.length; j++) {
     fem_t = coefficients_t[j] * i ** j;
     result_t = fem_t + result_t;
   }
   tipot_array.push(result_t);
}

//iterando da menor temperatura a maior com o passo 0.5 e alocando em uma lista

for (var i = 0 ; i <= 300;i += 0.5) {
    eixox.push(i);
    calc_tipo_b(i);
    calc_tipo_e(i);
    calc_tipo_j(i);
    calc_tipo_k(i);
    calc_tipo_n(i);
    calc_tipo_r(i);
    calc_tipo_s(i);
    calc_tipo_t(i);
  }
//indicando base de dados
const termopares = [
  {
    temperatura: eixox,
    termopares: {
      tipob: tipob_array,
      tipoe: tipoe_array,
      tipoj: tipoj_array,
      tipok: tipok_array,
      tipon: tipon_array,
      tipor: tipor_array,
      tipos: tipos_array,
      tipot: tipot_array,
      
    },
  },
];
//configuração do gráfico
const data = {
  labels: eixox,
  datasets: [
    {
      label: "Tipo B",
      data: termopares[0]["termopares"]["tipob"],
      backgroundColor: "rgba(244, 208, 111,1)",
      borderColor: "rgba(244, 208, 111,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipob",
      },
    },
    {
      label: "Tipo E",
      data: termopares[0]["termopares"]["tipoe"],
      backgroundColor: "rgba(252, 119, 83,1)",
      borderColor: "rgba(252, 119, 83,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipoe",
      },
    },
    {
      label: "Tipo J",
      data: termopares[0]["termopares"]["tipoj"],
      backgroundColor: "rgba(102, 215, 209,1)",
      borderColor: "rgba(102, 215, 209,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipoj",
      },
    },
    {
      label: "Tipo K",
      data: termopares[0]["termopares"]["tipok"],
      backgroundColor: "rgba(64, 61, 88,1)",
      borderColor: "rgba(64, 61, 88,1)",
      tension: 0.1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipok",
      },
    },
    {
      label: "Tipo N",
      data: termopares[0]["termopares"]["tipon"],
      backgroundColor: "rgba(219, 213, 110,1)",
      borderColor: "rgba(219, 213, 110,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipon",
      },
    },
    {
      label: "Tipo R",
      data: termopares[0]["termopares"]["tipor"],
      backgroundColor: "rgba(55, 114, 255,1)",
      borderColor: "rgba(55, 114, 255,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipor",
      },
    },
    {
      label: "Tipo S",
      data: termopares[0]["termopares"]["tipos"],
      backgroundColor: "rgba(163, 22, 33,1)",
      borderColor: "rgba(163, 22, 33,1)",
      tension:1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipos",
      },
    },
    {
      label: "Tipo T",
      data: termopares[0]["termopares"]["tipot"],
      backgroundColor: "rgba(255,26,104,1)",
      borderColor: "rgba(255,26,104,1)",
      tension: 1,
      parsing: {
        xAxisKey: "temperatura",
        yAxisKey: "termopares.tipot",
      },
    },
  ],
};
const config = {
  type: "line",
  data,
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        grid:{
          beginAtZero:true,
          display:false
        },
        title: {
          display: true,
          text: ' Temperatura',
          font: {
            family: 'Roboto, sans-serif',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      },
      y:{
        display: true,
        grid:{
          beginAtZero: true,
          display:false
        },
        title: {
          display: true,
          text: ' Milivolts(Mv)',
          font: {
            family: 'Roboto, sans-serif',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
        },
      }
    },
  },
};


const ctx = document.getElementById("chart");
//Criando objeto para plotar o gráfico
const myChart = new Chart(ctx, config);
function updateChart(data){
  //console.log(data.value);
  const mostraDados = myChart.isDatasetVisible(data.value);
  if(mostraDados === false){
    myChart.show(data.value);

  }
  if (mostraDados === true) {
    myChart.hide(data.value);
  }
}


/*function setaValores() {
  for (var i = 0; i < data.datasets.length; i++) {
     data.datasets[i].data;
  }
  var menor_temperatura = parseInt(document.getElementById("less_T").value);
  var maior_temperatura = parseInt(document.getElementById("more_T").value);
  eixox.length = 0;
  for (var i = menor_temperatura; i < maior_temperatura; i += 0.5) {
    eixox.push(i);
    calc_tipo_b(i);
    calc_tipo_e(i);
    calc_tipo_j(i);
    calc_tipo_k(i);
    calc_tipo_n(i);
    calc_tipo_r(i);
    calc_tipo_s(i);
    calc_tipo_t(i);
  }
}*/