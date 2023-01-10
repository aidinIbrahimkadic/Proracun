window.onload = function () {
  //DIJABAZ LINIJSKI GRAFIKON
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",

    data: {
      labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
      datasets: [
        {
          label: "He=5",
          data: [
            0.0,
            0.0372,
            0.073,
            0.1407,
            0.2617,
            0.4549,
            0.7028,
            0.9117,
            0.9922,
            0.9999,
            1,
            1,
            1,
            1,
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

        {
          label: "He=10",
          data: [
            0.0,
            0.0068,
            0.0136,
            0.027,
            0.0534,
            0.1039,
            0.197,
            0.3552,
            0.5842,
            0.8271,
            0.9701,
            0.9991,
            1,
            1,
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
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              var label = context.dataset.label || "";

              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "percent",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      tension: 0.3,
    },
  });

  //DIJABAZ BAR GRAFIKON
  var ctxBarDijabaz = document
    .getElementById("myChartBarDijabaz")
    .getContext("2d");
  var myChartBarDijabaz = new Chart(ctxBarDijabaz, {
    type: "bar",

    data: {
      labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
      datasets: [
        {
          label: "He=10",
          data: [
            0.0,
            0.0068,
            0.0068,
            0.0134,
            0.0263,
            0.0505,
            0.0931,
            0.1582,
            0.229,
            0.2429,
            0.143,
            0.029,
            0.0009,
            0,
          ],

          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },

        {
          label: "He=5",
          data: [
            0.0,
            0.0372,
            0.0358,
            0.0677,
            0.1209,
            0.1932,
            0.248,
            0.2089,
            0.0805,
            0.0077,
            0.0001,
            0,
            0,
            0,
          ],

          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              var label = context.dataset.label || "";

              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "percent",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.2,
      },
    },
  });
  //KREČNJAK GRAFIKON
  var ctxKrecnjak = document.getElementById("myChartKrecnjak").getContext("2d");
  var myChartKrecnjak = new Chart(ctxKrecnjak, {
    type: "line",

    data: {
      labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
      datasets: [
        {
          label: "He=10",
          data: [
            0.0,
            0.0149,
            0.0295,
            0.0581,
            0.1129,
            0.213,
            0.3806,
            0.6164,
            0.8528,
            0.9783,
            0.9995,
            1,
            1,
            1,
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

        {
          label: "He=15",
          data: [
            0.0,
            0.0034,
            0.0068,
            0.0137,
            0.0271,
            0.0535,
            0.1041,
            0.1974,
            0.3558,
            0.5851,
            0.8278,
            0.9704,
            0.9991,
            1,
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
        {
          label: "He=20",
          data: [
            0.0,
            0.0023,
            0.0047,
            0.0093,
            0.0186,
            0.0368,
            0.0722,
            0.1392,
            0.259,
            0.4509,
            0.6985,
            0.9091,
            0.9917,
            0.9999,
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
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              var label = context.dataset.label || "";

              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "percent",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      tension: 0.3,
    },
  });
  //KRECNJAK BAR GRAFIKON
  var ctxBarKrecnjak = document
    .getElementById("myChartBarKrecnjak")
    .getContext("2d");
  var myChartBarKrecnjak = new Chart(ctxBarKrecnjak, {
    type: "bar",

    data: {
      labels: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4092],
      datasets: [
        {
          label: "He=10",
          data: [
            0.0,
            0.0149,
            0.0146,
            0.0286,
            0.0547,
            0.1001,
            0.1676,
            0.2357,
            0.2365,
            0.1255,
            0.0212,
            0.0005,
            0,
            0,
          ],

          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
        },

        {
          label: "He=15",
          data: [
            0.0,
            0.0034,
            0.0034,
            0.0068,
            0.0135,
            0.0264,
            0.0506,
            0.0933,
            0.1584,
            0.2292,
            0.2428,
            0.1425,
            0.0288,
            0.0009,
          ],

          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)"],
          borderWidth: 2,
        },
        {
          label: "He=20",
          data: [
            0.0,
            0.0023,
            0.0023,
            0.0047,
            0.0092,
            0.0182,
            0.0354,
            0.067,
            0.1198,
            0.1919,
            0.2476,
            0.2106,
            0.0826,
            0.0082,
          ],

          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          borderColor: ["rgba(153, 102, 255, 1)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              var label = context.dataset.label || "";

              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat("en-US", {
                  style: "percent",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(context.parsed.y);
              }
              return label;
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        tension: 0.2,
      },
    },
  });
};
