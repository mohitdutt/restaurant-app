<template>
  <div class='demo-app'>
    <FullCalendar
      class='demo-app-calendar'
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      @dateClick="handleDateClick"
      />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function () {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
      ],
      checkCount: 0,
      startDate: {},
      endDate: {},
      calenderObj: {}
    }
  },
  methods: {
    handleDateClick (arg) {
      if (this.checkCount === 0) {
        this.startDate = arg.date
        this.endDate = arg.date
      } else {
        this.startDate = this.startDate
        this.endDate = arg.date
      }
      console.log('calenderEvents', this.calendarEvents)
      this.calendarEvents.push({
        title: 'new event', start: this.startDate, end: this.endDate, 'allDay': arg.allDay
      })
      this.checkCount++
    }
  }
}
</script>

<style lang='scss'>
// you must include each plugins' css
// paths prefixed with ~ signify node_modules
@import '../../node_modules/@fullcalendar/core/main.css';
@import '../../node_modules/@fullcalendar/daygrid/main.css';
@import '../../node_modules/@fullcalendar/timegrid/main.css';
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-top {
  margin: 0 0 3em;
}
.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
</style>
