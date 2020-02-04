function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $("#blah").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

$(".tigger").click(function() {
  $(".tab-menu").toggleClass("active");
});

// ================================ chart
var c = document.getElementById("myChart");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});

// ================================ chart
var c = document.getElementById("myChart_2");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});

// ================================ chart
var c = document.getElementById("myChart_3");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});

// ================================ chart
var c = document.getElementById("myChart_4");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});

// ================================ chart
var c = document.getElementById("myChart_5");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});

// ================================ chart
var c = document.getElementById("myChart_6");
var ctx = c.getContext("2d");

var stars = [135850, 52122, 148825, 16939, 9763, 52122, 148825];
var frameworks = [1, 2, 3, 4, 5, 6, 7];

var gradientFill = ctx.createLinearGradient(
  c.width / 2,
  0,
  c.width / 2,
  c.height / 1.5
);
gradientFill.addColorStop(0, "rgba(0,0,0,0.1");
gradientFill.addColorStop(1, "rgba(255,255,255,0.1");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: gradientFill,
        borderColor: "#000000",
        borderWidth: 2
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 10
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50
      }
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  responsive: true
});
