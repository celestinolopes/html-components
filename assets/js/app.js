$(document).ready(()=> {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 100,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  })

  const player = new Plyr('#player');


var ctx = document.getElementById('grafico_barra').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#0088FF',
                '#0088FF',
                '#0088FF',
                '#0088FF',
                '#0088FF',
                '#0088FF'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        layout: {
          padding: {
              left: 20,
              right: 0,
              top: 0,
              bottom: 0
          }
      }
    }
});

setTimeout(function(){

    var chart = document.getElementById("radioChartContent"),
     pVal = document.getElementById("percentValue");

		//Adiciona a class de animação
    chart.classList.add("animate");

    var PorcentagemCorrente = 0; // inicial a porcentagem

    // obtem a porcentagem em cada segundo
var currTimeout = setInterval(function(){
    //Incrementa o valor da porcentadagem
  PorcentagemCorrente+=10
  if( PorcentagemCorrente > 40){ // verifica se atingiu o limite

    pVal.innerHTML = PorcentagemCorrente+"%";
      //Para o cronometro
      clearInterval(currTimeout);
      //Pausa a animação
      chart.style.animationPlayState = "paused";
      chart.style.webkitAnimationPlayState = "paused"; //if webkit
      
      return false;
    }
    else{
      PorcentagemCorrente++;
      //mostra a porcentagem
      pVal.innerHTML = PorcentagemCorrente+"%";

    }
},10)

},100);
$(".alert").alert();
    
});