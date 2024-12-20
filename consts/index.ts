export const salesBarChart={
    options:{
        chart: {
            id: 'basic-bar',
            toolbar: { show: false },
            background:"#fff"
          },
          xaxis: {
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
          },
          yaxis: {
            min: 0,
            max: 500,  // Máximo valor del eje Y (50k)
          },
          dataLabels: {
            enabled: true,
            position:"top",
            // formatter: (val) => `${val}`,
            offsetY:-22,
      
            style: {
              colors: ['black'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          plotOptions: {
            bar: {
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },
          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#299CDB'],  // Colores de las barras
          },
          tooltip: {
            enabled: true,  // Oculta los tooltips
          },
    },
    series:[
        {
          name: 'Subscripciones',
          data: [280, 100, 100, 380, 150, 300, 350, 300, 80],  // Datos de las barras
        },
      ],
}

export const salesPieChart = {
    options: {
        chart: {
            type: 'donut',
          },
          labels: ['Plan Plus', 'Plan Pro', 'Plan Elite'],
          colors: ['#FF4560', '#00E396', '#008FFB'],
          legend: {
            position:'top',
            // position: 'bottom',
            horizontalAlign: 'center', // Alineación a la izquierda
            fontSize: '16px', // Controla el tamaño de la letra
            itemMargin: {
              vertical: 5,  // Margen entre los items de la leyenda
            },
            // offsetY: 10,  // Desplaza las leyendas hacia abajo, aumentando la separación
      
            markers: {
              width: 12,  // Tamaño del indicador de color en la leyenda
              height: 12,
            },
      
          },
    },
    series: [44, 55, 13],
  };

  export const salesDashChart={
    series:[
        {
          name: 'Usuarios',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148], // Datos para la línea normal
        },
        {
          name: 'Subscripciones',
          data: [23, 33, 43, 63, 53, 73, 83, 93, 123], // Datos para la línea punteada
        },
      ],
    options:   {
        chart: {
          type: 'line',
          height: 320,
        },
        stroke: {
          width: [4, 4], // Grosor de las líneas
          dashArray: [0, 8], // La primera línea es continua (0), la segunda es punteada (8)
        },
        
        series: [
          {
            name: 'Línea normal',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148], // Datos de la primera línea
          },
          {
            name: 'Línea punteada',
            data: [23, 33, 43, 63, 53, 73, 83, 93, 123], // Datos de la segunda línea
          },
        ],
        markers: {
          size: 4, // Tamaño de los puntos en las líneas
        },
        colors: ['#83D4FE', '#FF4560'], // Colores para las líneas
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'], // Etiquetas del eje X
        },
        legend: {
          position: 'bottom', 
          offsetY: 10,  
        },
  
    }}

export const contentHorizontalChart={
    series: [
        {
          data: [950, 850, 750, 500, 300, 250, 400], // Valores de 0 a 1000
        },
      ],

      options:{
        chart: {
            type: 'bar',
            toolbar:{
              show:false
            },
          },

          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },

          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#299CDB'],  // Colores de las barras
          },
          dataLabels: {
            enabled: true,
            position:"center",
            offsetX:-20,
      
            style: {
              colors: ['white'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          xaxis: {
            categories: [
              'Simulador 1',
              'Simulador 2',
              'Simulador 3',
              'Simulador 4',
              'Simulador 5',
              'Simulador 6',
              'Simulador 7',
            ], // Labels cambiados a "Simulador 1" al "Simulador 7"
          
          }
          ,
          yaxis: {
            max: 1000, // Ajuste para que el máximo valor en el eje X sea 1000
            labels: {
              style: {
                colors: ['black'], // Colores personalizados para cada categoría
                fontSize: '13px', // Tamaño de fuente para las categorías
              },
            },
          },
      }


}

export const contentPieChart={
    options:{
        chart: {
            type: 'donut',
          },
          labels: ['Metodologia', 'Redaccion', 'Pensamiento','Comprension'],
          colors: ['#0056D2', '#1ABC9C', '#EE4266',"#F3B942"],
          plotOptions: {
              pie: {
                dataLabels: {
                  offset: -20, // Ajusta la posición de las etiquetas dentro del pastel
                }
              }
            },
          legend: {
            position: 'bottom',
          //   position: 'left',  // Coloca las leyendas a la izquierda
            horizontalAlign: 'center', // Alineación a la izquierda
            fontSize: '13px', // Controla el tamaño de la letra
            itemMargin: {
              vertical: 5,  // Margen entre los items de la leyenda
            },
            offsetY: 10,  // Desplaza las leyendas hacia abajo, aumentando la separación
      
            markers: {
              width: 12,  // Tamaño del indicador de color en la leyenda
              height: 12,
            },
      
          },
       
    },
    series:[
        200, 220, 180,170
    ]
}

export const contentShadowChart={
    series: [
        {
          name: 'Lecciones',

          data: [3200, 2800, 3500, 4000, 2900, 3600, 4300, 4800]            , // Datos para el gráfico
        }
      ],
      options: {
        chart: {
          type: 'line',
          height: 250,
          toolbar:{
              show:false
            },
      
        },
        grid:{
          show:false
        },
        dataLabels: {
          enabled: false, // Desactiva las etiquetas de datos
        },
        stroke: {
          curve: 'smooth', // Configura el tipo de línea (suave o recta)
        },
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'], // Etiquetas en el eje X
        },
        yaxis: {
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        fill: {
          type: 'gradient', // Usa un gradiente para llenar el área
          gradient: {
          //   shadeIntensity: 1,
          //   opacityFrom: 0.5,
          //   opacityTo: 0.1,
            stops: [0, 100],
          },
        },
      },
}

export const contentLineChart={
    series: [
        {
          name: 'Cuestionarios',
          data:[2200, 3200, 2500, 3700, 3000, 4300, 3400, 4600]

      }
      ],
      options: {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: false, // Oculta la barra de herramientas
          },
        },
        grid: {
          show: false, // Oculta la rejilla
        },
        dataLabels: {
          enabled: false, // Desactiva las etiquetas de datos
        },
        stroke: {
          curve: 'straight', // Configura el tipo de línea (suave o recta)
          width: 3, // Grosor de la línea
          colors: ['#FF5733'], // Color de la línea
        },
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'], // Etiquetas en el eje X
        },
        yaxis: {
          max: 5000, // Valor máximo del eje Y
          title: {
            text: 'Ventas', // Título del eje Y
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        colors: ['#FF5733'], // Color del gráfico
      },
}


// Simuladores

export interface Simulator {
  title: string;
  time: string;
  questions: string;
  link: string;
  img: string;
}

export const simulators: Simulator[] = [
  {
    title: "Examen Diagnostico",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/diagnostico.webp",
  },
  {
    title: "Examen Simulador #1",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador.webp",
  },
  {
    title: "Examen Simulador #2",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador2.webp",
  },
  {
    title: "Examen Simulador #3",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador3.webp",
  },
  {
    title: "Examen Simulador #4",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador4.webp",
  },
  {
    title: "Examen Simulador #5",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador5.webp",
  },
  {
    title: "Examen Simulador #6",
    time: "4.5 horas",
    questions: "120 preguntas",
    link: "/curso/simulador",
    img: "/course/simulators/simulador6.webp",
  },
];


