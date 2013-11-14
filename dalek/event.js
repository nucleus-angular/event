module.exports = {
  name: 'event',

  'should be able to handle single event': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    .click('[data-ut="single-event"]')
      .assert.text('[data-ut="event-data"]', 'click', 'click event triggered')
    .done();
  },

  'should be able to handle multiple events': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
    //todo: wait for moveTo to be added to the API
    //.moveTo('[data-ut="multiple-events"]')
    //  .assert.text('[data-ut="event-data"]', 'mouseover', 'click event triggered')
    .click('[data-ut="multiple-events"]')
      .assert.text('[data-ut="event-data"]', 'click', 'click event triggered')
    .done();
  }
}