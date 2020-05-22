<template>
  <div id="app">
    <ReportView />
  </div>
</template>

<script>
import ReportView from '@/components/ReportView.vue'

export default {
  name: "App",
  components: {
    DoughnutChart,
    ReportView
  },
   data() {
    return {
      sexdist: (this.sexdist = {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Sex Distribution",
            lineTension: 0,
            backgroundColor: ["#2B2D42", "#3F78BD"],
            data: [31, 69],
          },
        ],
      }),
      sexdistoptions: (this.sexdistoptions = {
        animation: {
          animateScale: true,
        },
      }),
      studylevel: (this.studylevel = {
        labels: ["Postgraduate", "Undergraduate"],
        datasets: [
          {
            label: "Level Of Study",
            lineTension: 0,
            backgroundColor: ["#3F78BD", "#7AB6FF"],
            data: [18, 82],
          },
        ],
      }),
      studyleveloptions: (this.studyleveloptions = {
        animation: {
          animateScale: true,
        },
      }),
      enrollment: (this.enrollment = {
        labels: ["Part-Time", "Full-Time"],
        datasets: [
          {
            label: "Level Of Study",
            lineTension: 0,
            backgroundColor: ["#DBECF8", "#7AB6FF"],
            data: [24, 76],
          },
        ],
      }),
      enrollmentoptions: (this.enrollmentoptions = {
        animation: {
          animateScale: true,
        },
      }),
      staffenrollment: (this.staffenrollment = {
        labels: ["Part-Time", "Full-Time"],
        datasets: [
          {
            label: "Level Of Study",
            lineTension: 0,
            backgroundColor: ["#DBECF8", "#7AB6FF"],
            data: [18, 84],
          },
        ],
      }),
      staffenrollmentoptions: (this.staffenrollmentoptions = {
        animation: {
          animateScale: true,
        },
      }),
      staffcategory: (this.staffcategory = {
        labels: [
          "Other",
          "Academic",
          "Services",
          "Sr. Admin & Prof",
          "Admin & Tech",
        ],
        datasets: [
          {
            label: "Staff Category",
            lineTension: 0,
            backgroundColor: [
              "#DBECF8",
              "#7AB6FF",
              "#3F78BD",
              "#2FAD00",
              "#2B2D42",
            ],
            data: [4, 38, 11, 35, 14],
          },
        ],
      }),
      staffcategoryoptions: (this.staffcategoryoptions = {
        animation: {
          animateScale: false,
          animateRotate: true,
        },
        circumference: Math.PI,
        rotation: Math.PI,
      }),
      staffsexdist: (this.staffsexdist = {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Sex Distribution",
            lineTension: 0,
            backgroundColor: ["#2B2D42", "#3F78BD"],
            data: [37, 63],
          },
        ],
      }),
      staffsexdistoptions: (this.staffsexdistoptions = {
        animation: {
          animateScale: true,
        },
      }),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  text-transform: uppercase;
  text-align: center;
  line-height: 40px;
}
h2:nth-child(1) {
  color: #2fad00;
}
h1 {
  font-size: 100px;
}
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.small {
  width: 260px;
  margin: 20px auto;
}
.med {
  width: 350px;
  margin: 10px auto;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas: "a a" "b c";
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
</style>
