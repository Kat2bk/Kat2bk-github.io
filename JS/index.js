var timeline = new TimelineMax()

timeline.to("div:first-of-type", 2, {opacity:1})
  .fromTo("div:last-of-type span", 2, {marginLeft:-800, opacity:0}, {marginLeft:0, opacity:1}, 2)
  .fromTo("div:last-of-type", 2, {width:0}, {width:355}, 2)