/********************* 
 * Dotprobetask Test *
 *********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#ffffff'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'dotprobetask';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_practiceRoutineBegin());
flowScheduler.add(instr_practiceRoutineEachFrame());
flowScheduler.add(instr_practiceRoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
flowScheduler.add(instr_actualRoutineBegin());
flowScheduler.add(instr_actualRoutineEachFrame());
flowScheduler.add(instr_actualRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/f_a2.jpg', 'path': 'images/f_a2.jpg'},
    {'name': 'images/mtest_p7.jpg', 'path': 'images/mtest_p7.jpg'},
    {'name': 'images/m_a1.jpg', 'path': 'images/m_a1.jpg'},
    {'name': 'images/m_a8.jpg', 'path': 'images/m_a8.jpg'},
    {'name': 'images/mtest_p4.jpg', 'path': 'images/mtest_p4.jpg'},
    {'name': 'images/ftest_p4.jpg', 'path': 'images/ftest_p4.jpg'},
    {'name': 'conditions_practice_trial.xlsx', 'path': 'conditions_practice_trial.xlsx'},
    {'name': 'images/mtest_p3.jpg', 'path': 'images/mtest_p3.jpg'},
    {'name': 'images/m_a3.jpg', 'path': 'images/m_a3.jpg'},
    {'name': 'images/probedown.png', 'path': 'images/probedown.png'},
    {'name': 'images/m_a7.jpg', 'path': 'images/m_a7.jpg'},
    {'name': 'images/f_a3.jpg', 'path': 'images/f_a3.jpg'},
    {'name': 'images/f_a5.jpg', 'path': 'images/f_a5.jpg'},
    {'name': 'images/mtest_n2.jpg', 'path': 'images/mtest_n2.jpg'},
    {'name': 'images/ftest_n6.jpg', 'path': 'images/ftest_n6.jpg'},
    {'name': 'images/ftest_n1.jpg', 'path': 'images/ftest_n1.jpg'},
    {'name': 'images/f_a8.jpg', 'path': 'images/f_a8.jpg'},
    {'name': 'images/mtest_p1.jpg', 'path': 'images/mtest_p1.jpg'},
    {'name': 'images/ftest_p2.jpg', 'path': 'images/ftest_p2.jpg'},
    {'name': 'images/mtest_p2.jpg', 'path': 'images/mtest_p2.jpg'},
    {'name': 'images/ftest_n3.jpg', 'path': 'images/ftest_n3.jpg'},
    {'name': 'images/ftest_n5.jpg', 'path': 'images/ftest_n5.jpg'},
    {'name': 'images/ftest_p8.jpg', 'path': 'images/ftest_p8.jpg'},
    {'name': 'images/mtest_n7.jpg', 'path': 'images/mtest_n7.jpg'},
    {'name': 'images/f_a6.jpg', 'path': 'images/f_a6.jpg'},
    {'name': 'images/f_a4.jpg', 'path': 'images/f_a4.jpg'},
    {'name': 'images/m_a2.jpg', 'path': 'images/m_a2.jpg'},
    {'name': 'images/ftest_p7.jpg', 'path': 'images/ftest_p7.jpg'},
    {'name': 'images/mtest_n5.jpg', 'path': 'images/mtest_n5.jpg'},
    {'name': 'images/ftest_p6.jpg', 'path': 'images/ftest_p6.jpg'},
    {'name': 'images/probeup.png', 'path': 'images/probeup.png'},
    {'name': 'images/mtest_n1.jpg', 'path': 'images/mtest_n1.jpg'},
    {'name': 'images/ftest_p1.jpg', 'path': 'images/ftest_p1.jpg'},
    {'name': 'images/f_a1.jpg', 'path': 'images/f_a1.jpg'},
    {'name': 'images/mtest_n8.jpg', 'path': 'images/mtest_n8.jpg'},
    {'name': 'images/ftest_p3.jpg', 'path': 'images/ftest_p3.jpg'},
    {'name': 'images/ftest_n4.jpg', 'path': 'images/ftest_n4.jpg'},
    {'name': 'images/ftest_n8.jpg', 'path': 'images/ftest_n8.jpg'},
    {'name': 'images/ftest_p5.jpg', 'path': 'images/ftest_p5.jpg'},
    {'name': 'images/ftest_n2.jpg', 'path': 'images/ftest_n2.jpg'},
    {'name': 'images/m_a4.jpg', 'path': 'images/m_a4.jpg'},
    {'name': 'images/m_a5.jpg', 'path': 'images/m_a5.jpg'},
    {'name': 'images/mtest_n4.jpg', 'path': 'images/mtest_n4.jpg'},
    {'name': 'images/mtest_p6.jpg', 'path': 'images/mtest_p6.jpg'},
    {'name': 'images/ftest_n7.jpg', 'path': 'images/ftest_n7.jpg'},
    {'name': 'images/mtest_n3.jpg', 'path': 'images/mtest_n3.jpg'},
    {'name': 'images/mtest_p5.jpg', 'path': 'images/mtest_p5.jpg'},
    {'name': 'images/mtest_n6.jpg', 'path': 'images/mtest_n6.jpg'},
    {'name': 'images/m_a6.jpg', 'path': 'images/m_a6.jpg'},
    {'name': 'images/f_a7.jpg', 'path': 'images/f_a7.jpg'},
    {'name': 'images/mtest_p8.jpg', 'path': 'images/mtest_p8.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instr_practiceClock;
var instrText;
var instr_key_resp;
var fixcross_pracClock;
var fc_prac;
var probe_resp_pracClock;
var probe_prac;
var key_resp_prac;
var feedback_pracClock;
var feedbackText;
var instr_actualClock;
var instrText_2;
var instr_key_resp_2;
var fixcrossClock;
var naphotos;
var negalt;
var iti;
var iti_16;
var jitter;
var iti_neg_8;
var iti_alt_8;
var iti_neg_192;
var iti_alt_192;
var jitter_iti;
var fc;
var stimulusClock;
var participantID;
var partnerID;
var participant_gender;
var partner_gender;
var ext;
var directory;
var posphotos;
var pos_neg_8;
var pos_alt_8;
var pos_neg_192;
var pos_alt_192;
var positive;
var SOA_neg_8;
var SOA_alt_8;
var SOA_neg_192;
var SOA_alt_192;
var SOA;
var pos_position_neg_8;
var pos_position_alt_8;
var pos_position_neg_192;
var pos_position_alt_192;
var pos_leftorright;
var na_leftorright;
var positivefilepaths;
var negaltfilepaths;
var positiveimage;
var negaltimage;
var probe_respClock;
var probe_position_neg_8;
var probe_position_alt_8;
var probe_position_neg_192;
var probe_position_alt_192;
var probe_leftorright;
var probe_symbol_neg_8;
var probe_symbol_alt_8;
var probe_symbol_neg_192;
var probe_symbol_alt_192;
var probe_upordown_short;
var corrAns;
var probe_upordown;
var probes;
var key_resp;
var break25Clock;
var break25_text;
var break25_key;
var break50Clock;
var break50_text;
var break50_key;
var break75Clock;
var break75_text;
var break75_key;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr_practice"
  instr_practiceClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: "Instructions: \nYou will be shown an image of an arrow either pointing up (“ᐃ”) or else pointing down (“ᐁ”). All you need to do is use the keys on your keyboard to indicate whether it is pointing up or down.\n\nOn each trial you will be briefly shown a plus sign (+), which you should look at to bring your attention to the center of the screen.\n\nThen as soon as you see an image of an arrow, quickly press the UP arrow key if the image is pointing up, and the DOWN arrow key if the image is pointing down.\n\nTo start a series of practice trials, just click the button below and then immediately place one of your fingers on the UP arrow key and one on the DOWN arrow key so you can answer quickly. \n\nWhen you're ready to continue, click the SPACE button.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixcross_prac"
  fixcross_pracClock = new util.Clock();
  fc_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'fc_prac',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "probe_resp_prac"
  probe_resp_pracClock = new util.Clock();
  probe_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'probe_prac',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('lightgrey'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_prac"
  feedback_pracClock = new util.Clock();
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instr_actual"
  instr_actualClock = new util.Clock();
  instrText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText_2',
    text: 'Now we are going to start with the real trials. On each trial you will see some faces, which you should try to ignore. Instead, just focus on the arrows as before: As soon as you see an image of an arrow, quickly press the UP arrow key if the image is pointing up, and the DOWN arrow key if the image is pointing down. \n\nBE ACCURATE - make sure you click the right button.\n\nTo start these real trials, click the SPACE button.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixcross"
  fixcrossClock = new util.Clock();
  // create function for shuffle on js
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remaining elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Array of negative and alternative photo file names (without directory and ext)
  naphotos = []
  for (var i = 1; i <= 8; i++) {
    naphotos.push('n' + i);
    naphotos.push('a' + i);
  }
  
  
  // Create blocks of randomised array of naphotos
  negalt = []
  for (let block = 0; block < 24; block++) {
    // Append a random selection, Array.from() typecasts each list into array 
    negalt.push(Array.from(shuffle(naphotos)))
  }
  negalt = negalt.flat() //flatten list
  console.log(negalt)
  console.log(negalt.length)
  //final array of neg/alt photos (without directory and ext) named "negalt"
  
  
  ////////////////////////////
  // Set of values for the jittered inter-trial interval (ITI)
  iti = [0.2, 0.4, 0.6, 0.8]
  
  //Block of 16 iti values
  iti_16 = Array(4).fill(iti).flat();
  jitter = []
  
  for (let block = 0; block < 24; block++) {
    // Append a random block of 16, Array.from() typecasts each list into array
    jitter.push(Array.from(shuffle(iti_16)))
  }
  jitter = jitter.flat() //flatten list
  console.log(jitter)
  console.log(jitter.length)
  ////////////////////////////
  
  
  
  //creating ITI and tagging it such that each trial type has 2 of each ITI.
  iti_neg_8 = [0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8]
  iti_alt_8 = [0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8]
  iti_neg_192 = []
  iti_alt_192 = []
  for (let block = 0; block < 24; block++) {
    iti_neg_192.push(Array.from(shuffle(iti_neg_8)))
  }
  iti_neg_192 = iti_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    iti_alt_192.push(Array.from(shuffle(iti_alt_8)))
  }
  iti_alt_192 = iti_alt_192.flat()
  console.log(iti_neg_192)
  console.log(iti_neg_192.length)
  console.log(iti_alt_192)
  console.log(iti_alt_192.length)
  
  
  //full jitter_iti array
  jitter_iti = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     jitter_iti.push(iti_neg_192[k])
      k = k+1
    }
    else {
     jitter_iti.push(iti_alt_192[l])
      l = l+1
    }
  }
  jitter_iti = jitter_iti.flat()
  console.log(jitter_iti)
  console.log(jitter_iti.length)
  fc = new visual.TextStim({
    win: psychoJS.window,
    name: 'fc',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  // fetch participant ID
  participantID = expInfo['participant']; // e.g. 'm013', 'f123';
  
  //create partnerID
  if (participantID[0] == 'f'){
   partnerID = 'm' + participantID.substring(1)
  }
  else if (participantID[0] == 'F'){
   partnerID = 'm' + participantID.substring(1)
  }
  else partnerID = 'f' + participantID.substring(1)
  
  //create partner_gender
  participant_gender = participantID[0]
  if (participant_gender == 'f'){
   partner_gender = 'm'
  }
  else if (participant_gender == 'F'){
   partner_gender = 'm'
  }
  else partner_gender = 'f'
  
  
  // info on the folder name where the resources are stored and the file extension
  ext = '.jpg'
  directory = 'images/'
  
  
  // create the function for shuffle on js
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
  
    // While there remaining elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
  
    return array;
  }
  
  ////////////// NOTE: negalt code chunk shifted to jittering code///////////////
  
  // Array of positive photo file names (without directory and ext)
  posphotos = []
  pos_neg_8 = []
  pos_alt_8 = []
  for (var i = 1; i <= 8; i++) {
    pos_neg_8.push('p' + i);
    pos_alt_8.push('p' + i);
  }
  
  //creating posphotos and tagging it such that each block of 16 has one unique pairing of each trial type. i.e. p1 is with one neg and one alt.
  pos_neg_192 = []
  pos_alt_192 = []
  for (let block = 0; block < 24; block++) {
    pos_neg_192.push(Array.from(shuffle(pos_neg_8)))
  }
  pos_neg_192 = pos_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    pos_alt_192.push(Array.from(shuffle(pos_alt_8)))
  }
  pos_alt_192 = pos_alt_192.flat()
  console.log(pos_neg_192)
  console.log(pos_neg_192.length)
  console.log(pos_alt_192)
  console.log(pos_alt_192.length)
  
  
  //full positive array
  positive = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     positive.push(pos_neg_192[k])
      k = k+1
    }
    else {
     positive.push(pos_alt_192[l])
      l = l+1
    }
  }
  positive = positive.flat()
  console.log(positive)
  console.log(positive.length)
  //final array of positive photos (without directory and ext) is named "positive"
  
  
  //creating SOA and tagging it such that each trial type has half of each SOA.
  SOA_neg_8 = [0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1]
  SOA_alt_8 = [0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1]
  SOA_neg_192 = []
  SOA_alt_192 = []
  for (let block = 0; block < 24; block++) {
    SOA_neg_192.push(Array.from(shuffle(SOA_neg_8)))
  }
  SOA_neg_192 = SOA_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    SOA_alt_192.push(Array.from(shuffle(SOA_alt_8)))
  }
  SOA_alt_192 = SOA_alt_192.flat()
  console.log(SOA_neg_192)
  console.log(SOA_neg_192.length)
  console.log(SOA_alt_192)
  console.log(SOA_alt_192.length)
  
  
  //full SOA array
  SOA = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     SOA.push(SOA_neg_192[k])
      k = k+1
    }
    else {
     SOA.push(SOA_alt_192[l])
      l = l+1
    }
  }
  SOA = SOA.flat()
  console.log(SOA)
  console.log(SOA.length)
  
  //creating pos_leftorright and tagging it such that each trial type has half of each pos_leftorright.
  pos_position_neg_8 = [-0.4, -0.4, -0.4, -0.4, 0.4, 0.4, 0.4, 0.4]
  pos_position_alt_8 = [-0.4, -0.4, -0.4, -0.4, 0.4, 0.4, 0.4, 0.4]
  pos_position_neg_192 = []
  pos_position_alt_192 = []
  for (let block = 0; block < 24; block++) {
    pos_position_neg_192.push(Array.from(shuffle(pos_position_neg_8)))
  }
  pos_position_neg_192 = pos_position_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    pos_position_alt_192.push(Array.from(shuffle(pos_position_alt_8)))
  }
  pos_position_alt_192 = pos_position_alt_192.flat()
  console.log(pos_position_neg_192)
  console.log(pos_position_neg_192.length)
  console.log(pos_position_alt_192)
  console.log(pos_position_alt_192.length)
  
  //full pos_leftorright array
  pos_leftorright = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     pos_leftorright.push(pos_position_neg_192[k])
      k = k+1
    }
    else {
     pos_leftorright.push(pos_position_alt_192[l])
      l = l+1
    }
  }
  pos_leftorright = pos_leftorright.flat()
  console.log(pos_leftorright)
  console.log(pos_leftorright.length)
  
  
  
  //creating na_leftorright array. basically when pos_leftorright = 0.4, then na_leftorright = -0.4 and vice versa
  na_leftorright = []
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (pos_leftorright[j] == 0.4) {
     na_leftorright.push(-0.4)
    }
    else {
     na_leftorright.push(0.4)
    }
  }
  na_leftorright = na_leftorright.flat()
  console.log(na_leftorright)
  console.log(na_leftorright.length)
  
  
  positivefilepaths = []
  for (var i = 0; i <= 383; i++) {
    positivefilepaths.push(directory + partnerID + '_' + positive[i] + ext);
  }
  console.log(positivefilepaths)
  
  //final array of neg/alt photo file paths with directory and ext named "negaltfilepaths"
  negaltfilepaths = []
  for (var i = 0; i <= 383; i++) {
   if (negalt[i][0] == 'n') {
     negaltfilepaths.push(directory + partnerID + '_' + negalt[i] + ext);
    }
    else {
     negaltfilepaths.push(directory + partner_gender + '_' + negalt[i] + ext);
    }
    
  }
  console.log(negaltfilepaths)
  
  
  positiveimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'positiveimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.39, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  negaltimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'negaltimage', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.39, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "probe_resp"
  probe_respClock = new util.Clock();
  // create the function for shuffle on js
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
  
    // While there remaining elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
  
    return array;
  }
  
  //creating probe_leftorright and tagging it such that each trial type has half of each probe_leftorright.
  probe_position_neg_8 = [-0.4, -0.4, -0.4, -0.4, 0.4, 0.4, 0.4, 0.4]
  probe_position_alt_8 = [-0.4, -0.4, -0.4, -0.4, 0.4, 0.4, 0.4, 0.4]
  probe_position_neg_192 = []
  probe_position_alt_192 = []
  for (let block = 0; block < 24; block++) {
    probe_position_neg_192.push(Array.from(shuffle(probe_position_neg_8)))
  }
  probe_position_neg_192 = probe_position_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    probe_position_alt_192.push(Array.from(shuffle(probe_position_alt_8)))
  }
  probe_position_alt_192 = probe_position_alt_192.flat()
  console.log(probe_position_neg_192)
  console.log(probe_position_neg_192.length)
  console.log(probe_position_alt_192)
  console.log(probe_position_alt_192.length)
  
  //full probe_leftorright array
  probe_leftorright = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     probe_leftorright.push(probe_position_neg_192[k])
      k = k+1
    }
    else {
     probe_leftorright.push(probe_position_alt_192[l])
      l = l+1
    }
  }
  probe_leftorright = probe_leftorright.flat()
  console.log(probe_leftorright)
  console.log(probe_leftorright.length)
  
  /////////////////////////////
  /////////////////////////////
  //creating probe_upordown and tagging it such that each trial type has half of each probe_upordown.
  probe_symbol_neg_8 = ['up', 'up', 'up', 'up', 'down', 'down', 'down', 'down']
  probe_symbol_alt_8 = ['up', 'up', 'up', 'up', 'down', 'down', 'down', 'down']
  probe_symbol_neg_192 = []
  probe_symbol_alt_192 = []
  for (let block = 0; block < 24; block++) {
    probe_symbol_neg_192.push(Array.from(shuffle(probe_symbol_neg_8)))
  }
  probe_symbol_neg_192 = probe_symbol_neg_192.flat()
  for (let block = 0; block < 24; block++) {
    probe_symbol_alt_192.push(Array.from(shuffle(probe_symbol_alt_8)))
  }
  probe_symbol_alt_192 = probe_symbol_alt_192.flat()
  console.log(probe_symbol_neg_192)
  console.log(probe_symbol_neg_192.length)
  console.log(probe_symbol_alt_192)
  console.log(probe_symbol_alt_192.length)
  
  //full probe_upordown array
  probe_upordown_short = []
  var k = 0 //helper index for negative
  var l = 0 //helper index for alternative
  for (var j = 0; j <= 383; j++) {
    // Append a random selection, Array.from() typecasts each list into array
    if (negalt[j][0] == 'n') {
     probe_upordown_short.push(probe_symbol_neg_192[k])
      k = k+1
    }
    else {
     probe_upordown_short.push(probe_symbol_alt_192[l])
      l = l+1
    }
  }
  probe_upordown_short = probe_upordown_short.flat()
  console.log(probe_upordown_short)
  console.log(probe_upordown_short.length)
  
  //creating corrAns array, tagging to probe_upordown
  corrAns = probe_upordown_short
  
  probe_upordown = []
  for (var i = 0; i <= 383; i++) {
    probe_upordown.push('images/probe' + probe_upordown_short[i] + '.png');
  }
  console.log(probe_upordown)
  
  probes = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probes', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.02, 0.02],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break25"
  break25Clock = new util.Clock();
  break25_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break25_text',
    text: 'You’ve completed 25% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  break25_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break50"
  break50Clock = new util.Clock();
  break50_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break50_text',
    text: 'You’ve completed 50% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  break50_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break75"
  break75Clock = new util.Clock();
  break75_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break75_text',
    text: 'You’ve completed 75% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  break75_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instr_key_resp_allKeys;
var instr_practiceComponents;
function instr_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_practice'-------
    t = 0;
    instr_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_key_resp.keys = undefined;
    instr_key_resp.rt = undefined;
    _instr_key_resp_allKeys = [];
    // keep track of which components have finished
    instr_practiceComponents = [];
    instr_practiceComponents.push(instrText);
    instr_practiceComponents.push(instr_key_resp);
    
    instr_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_practice'-------
    // get current time
    t = instr_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instr_key_resp* updates
    if (t >= 0.0 && instr_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp.tStart = t;  // (not accounting for frame time here)
      instr_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp.clearEvents(); });
    }

    if (instr_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_allKeys = _instr_key_resp_allKeys.concat(theseKeys);
      if (_instr_key_resp_allKeys.length > 0) {
        instr_key_resp.keys = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp.rt = _instr_key_resp_allKeys[_instr_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_practice'-------
    instr_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instr_key_resp.stop();
    // the Routine "instr_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_trials;
var currentLoop;
function practice_trialsLoopBegin(practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions_practice_trial.xlsx',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_trials.forEach(function() {
    const snapshot = practice_trials.getSnapshot();

    practice_trialsLoopScheduler.add(importConditions(snapshot));
    practice_trialsLoopScheduler.add(fixcross_pracRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(fixcross_pracRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(fixcross_pracRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(probe_resp_pracRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(probe_resp_pracRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(probe_resp_pracRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(feedback_pracRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(feedback_pracRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(feedback_pracRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 384, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(fixcrossRoutineBegin(snapshot));
    trialsLoopScheduler.add(fixcrossRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(fixcrossRoutineEnd(snapshot));
    trialsLoopScheduler.add(stimulusRoutineBegin(snapshot));
    trialsLoopScheduler.add(stimulusRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(stimulusRoutineEnd(snapshot));
    trialsLoopScheduler.add(probe_respRoutineBegin(snapshot));
    trialsLoopScheduler.add(probe_respRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(probe_respRoutineEnd(snapshot));
    trialsLoopScheduler.add(break25RoutineBegin(snapshot));
    trialsLoopScheduler.add(break25RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(break25RoutineEnd(snapshot));
    trialsLoopScheduler.add(break50RoutineBegin(snapshot));
    trialsLoopScheduler.add(break50RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(break50RoutineEnd(snapshot));
    trialsLoopScheduler.add(break75RoutineBegin(snapshot));
    trialsLoopScheduler.add(break75RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(break75RoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var fixcross_pracComponents;
function fixcross_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixcross_prac'-------
    t = 0;
    fixcross_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixcross_pracComponents = [];
    fixcross_pracComponents.push(fc_prac);
    
    fixcross_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixcross_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixcross_prac'-------
    // get current time
    t = fixcross_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fc_prac* updates
    if (t >= 0.0 && fc_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fc_prac.tStart = t;  // (not accounting for frame time here)
      fc_prac.frameNStart = frameN;  // exact frame index
      
      fc_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fc_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fc_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixcross_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixcross_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixcross_prac'-------
    fixcross_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_prac_allKeys;
var probe_resp_pracComponents;
function probe_resp_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'probe_resp_prac'-------
    t = 0;
    probe_resp_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    probe_prac.setPos([probe_leftorright_trial, 0]);
    probe_prac.setText(probe_upordown_trial);
    key_resp_prac.keys = undefined;
    key_resp_prac.rt = undefined;
    _key_resp_prac_allKeys = [];
    // keep track of which components have finished
    probe_resp_pracComponents = [];
    probe_resp_pracComponents.push(probe_prac);
    probe_resp_pracComponents.push(key_resp_prac);
    
    probe_resp_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function probe_resp_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'probe_resp_prac'-------
    // get current time
    t = probe_resp_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probe_prac* updates
    if (t >= 0.0 && probe_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_prac.tStart = t;  // (not accounting for frame time here)
      probe_prac.frameNStart = frameN;  // exact frame index
      
      probe_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (probe_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      probe_prac.setAutoDraw(false);
    }
    
    // *key_resp_prac* updates
    if (t >= 0.0 && key_resp_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.start(); }); // start on screen flip
    }

    if (key_resp_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_prac.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_prac_allKeys = _key_resp_prac_allKeys.concat(theseKeys);
      if (_key_resp_prac_allKeys.length > 0) {
        key_resp_prac.keys = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_prac.rt = _key_resp_prac_allKeys[_key_resp_prac_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_prac.keys == corrAns_trial) {
            key_resp_prac.corr = 1;
        } else {
            key_resp_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    probe_resp_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probe_resp_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'probe_resp_prac'-------
    probe_resp_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_prac.stop();
    // the Routine "probe_resp_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var msg;
var msgColor;
var feedback_pracComponents;
function feedback_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_prac'-------
    t = 0;
    feedback_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    if (key_resp_prac.corr) {
        msg = "Correct! ";
        msgColor = "green";
    } else {
        msg = "Oops, that was wrong.";
        msgColor = "red";
    }
    
    feedbackText.setColor(new util.Color(msgColor));
    feedbackText.setText(msg);
    // keep track of which components have finished
    feedback_pracComponents = [];
    feedback_pracComponents.push(feedbackText);
    
    feedback_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_prac'-------
    // get current time
    t = feedback_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackText* updates
    if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackText.tStart = t;  // (not accounting for frame time here)
      feedbackText.frameNStart = frameN;  // exact frame index
      
      feedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedbackText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_prac'-------
    feedback_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _instr_key_resp_2_allKeys;
var instr_actualComponents;
function instr_actualRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_actual'-------
    t = 0;
    instr_actualClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_key_resp_2.keys = undefined;
    instr_key_resp_2.rt = undefined;
    _instr_key_resp_2_allKeys = [];
    // keep track of which components have finished
    instr_actualComponents = [];
    instr_actualComponents.push(instrText_2);
    instr_actualComponents.push(instr_key_resp_2);
    
    instr_actualComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_actualRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_actual'-------
    // get current time
    t = instr_actualClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText_2* updates
    if (t >= 0.0 && instrText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText_2.tStart = t;  // (not accounting for frame time here)
      instrText_2.frameNStart = frameN;  // exact frame index
      
      instrText_2.setAutoDraw(true);
    }

    
    // *instr_key_resp_2* updates
    if (t >= 0.0 && instr_key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key_resp_2.tStart = t;  // (not accounting for frame time here)
      instr_key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key_resp_2.clearEvents(); });
    }

    if (instr_key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _instr_key_resp_2_allKeys = _instr_key_resp_2_allKeys.concat(theseKeys);
      if (_instr_key_resp_2_allKeys.length > 0) {
        instr_key_resp_2.keys = _instr_key_resp_2_allKeys[_instr_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        instr_key_resp_2.rt = _instr_key_resp_2_allKeys[_instr_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_actualComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_actualRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_actual'-------
    instr_actualComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    instr_key_resp_2.stop();
    // the Routine "instr_actual" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixcrossComponents;
function fixcrossRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixcross'-------
    t = 0;
    fixcrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("FC_jitter", jitter_iti[snapshot.thisN]);
    // keep track of which components have finished
    fixcrossComponents = [];
    fixcrossComponents.push(fc);
    
    fixcrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixcrossRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixcross'-------
    // get current time
    t = fixcrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fc* updates
    if (t >= 0.0 && fc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fc.tStart = t;  // (not accounting for frame time here)
      fc.frameNStart = frameN;  // exact frame index
      
      fc.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter_iti[snapshot.thisN] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fc.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fc.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixcrossComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixcrossRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixcross'-------
    fixcrossComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixcross" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stimulus'-------
    t = 0;
    stimulusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    positiveimage.setPos([pos_leftorright[snapshot.thisN], 0]);
    positiveimage.setImage(positivefilepaths[snapshot.thisN]);
    negaltimage.setPos([na_leftorright[snapshot.thisN], 0]);
    negaltimage.setImage(negaltfilepaths[snapshot.thisN]);
    psychoJS.experiment.addData("posimage", positive[snapshot.thisN]);
    psychoJS.experiment.addData("negaltimage", negalt[snapshot.thisN]);
    psychoJS.experiment.addData("SOA", SOA[snapshot.thisN]);
    psychoJS.experiment.addData("pos_leftorright", pos_leftorright[snapshot.thisN]);
    psychoJS.experiment.addData("na_leftorright", na_leftorright[snapshot.thisN]);
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(positiveimage);
    stimulusComponents.push(negaltimage);
    
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulusRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stimulus'-------
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *positiveimage* updates
    if (t >= 0.0 && positiveimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      positiveimage.tStart = t;  // (not accounting for frame time here)
      positiveimage.frameNStart = frameN;  // exact frame index
      
      positiveimage.setAutoDraw(true);
    }

    frameRemains = SOA[snapshot.thisN]  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((positiveimage.status === PsychoJS.Status.STARTED || positiveimage.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      positiveimage.setAutoDraw(false);
    }
    
    // *negaltimage* updates
    if (t >= 0.0 && negaltimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      negaltimage.tStart = t;  // (not accounting for frame time here)
      negaltimage.frameNStart = frameN;  // exact frame index
      
      negaltimage.setAutoDraw(true);
    }

    frameRemains = SOA[snapshot.thisN]  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((negaltimage.status === PsychoJS.Status.STARTED || negaltimage.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      negaltimage.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stimulus'-------
    stimulusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "stimulus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var probe_respComponents;
function probe_respRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'probe_resp'-------
    t = 0;
    probe_respClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    probes.setPos([probe_leftorright[snapshot.thisN], 0]);
    probes.setImage(probe_upordown[snapshot.thisN]);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData("probe_leftorright", probe_leftorright[snapshot.thisN]);
    psychoJS.experiment.addData("probe_upordown", probe_upordown_short[snapshot.thisN]);
    
    // keep track of which components have finished
    probe_respComponents = [];
    probe_respComponents.push(probes);
    probe_respComponents.push(key_resp);
    
    probe_respComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function probe_respRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'probe_resp'-------
    // get current time
    t = probe_respClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probes* updates
    if (t >= 0.0 && probes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probes.tStart = t;  // (not accounting for frame time here)
      probes.frameNStart = frameN;  // exact frame index
      
      probes.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['up', 'down'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corrAns[snapshot.thisN]) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    probe_respComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probe_respRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'probe_resp'-------
    probe_respComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns[snapshot.thisN])) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "probe_resp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _break25_key_allKeys;
var break25Components;
function break25RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break25'-------
    t = 0;
    break25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(60.000000);
    // update component parameters for each repeat
    if ((snapshot.thisN !== 95)) {
        continueRoutine = false;
    }
    
    break25_key.keys = undefined;
    break25_key.rt = undefined;
    _break25_key_allKeys = [];
    // keep track of which components have finished
    break25Components = [];
    break25Components.push(break25_text);
    break25Components.push(break25_key);
    
    break25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break25RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break25'-------
    // get current time
    t = break25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break25_text* updates
    if (t >= 0.0 && break25_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break25_text.tStart = t;  // (not accounting for frame time here)
      break25_text.frameNStart = frameN;  // exact frame index
      
      break25_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break25_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break25_text.setAutoDraw(false);
    }
    
    // *break25_key* updates
    if (t >= 0.0 && break25_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break25_key.tStart = t;  // (not accounting for frame time here)
      break25_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break25_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break25_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break25_key.clearEvents(); });
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break25_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break25_key.status = PsychoJS.Status.FINISHED;
  }

    if (break25_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = break25_key.getKeys({keyList: ['space'], waitRelease: false});
      _break25_key_allKeys = _break25_key_allKeys.concat(theseKeys);
      if (_break25_key_allKeys.length > 0) {
        break25_key.keys = _break25_key_allKeys[_break25_key_allKeys.length - 1].name;  // just the last key pressed
        break25_key.rt = _break25_key_allKeys[_break25_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break25RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break25'-------
    break25Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('break25_key.keys', break25_key.keys);
    if (typeof break25_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break25_key.rt', break25_key.rt);
        routineTimer.reset();
        }
    
    break25_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _break50_key_allKeys;
var break50Components;
function break50RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break50'-------
    t = 0;
    break50Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(60.000000);
    // update component parameters for each repeat
    if ((snapshot.thisN !== 191)) {
        continueRoutine = false;
    }
    
    break50_key.keys = undefined;
    break50_key.rt = undefined;
    _break50_key_allKeys = [];
    // keep track of which components have finished
    break50Components = [];
    break50Components.push(break50_text);
    break50Components.push(break50_key);
    
    break50Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break50RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break50'-------
    // get current time
    t = break50Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break50_text* updates
    if (t >= 0.0 && break50_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break50_text.tStart = t;  // (not accounting for frame time here)
      break50_text.frameNStart = frameN;  // exact frame index
      
      break50_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break50_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break50_text.setAutoDraw(false);
    }
    
    // *break50_key* updates
    if (t >= 0.0 && break50_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break50_key.tStart = t;  // (not accounting for frame time here)
      break50_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break50_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break50_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break50_key.clearEvents(); });
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break50_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break50_key.status = PsychoJS.Status.FINISHED;
  }

    if (break50_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = break50_key.getKeys({keyList: ['space'], waitRelease: false});
      _break50_key_allKeys = _break50_key_allKeys.concat(theseKeys);
      if (_break50_key_allKeys.length > 0) {
        break50_key.keys = _break50_key_allKeys[_break50_key_allKeys.length - 1].name;  // just the last key pressed
        break50_key.rt = _break50_key_allKeys[_break50_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break50Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break50RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break50'-------
    break50Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('break50_key.keys', break50_key.keys);
    if (typeof break50_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break50_key.rt', break50_key.rt);
        routineTimer.reset();
        }
    
    break50_key.stop();
    return Scheduler.Event.NEXT;
  };
}


var _break75_key_allKeys;
var break75Components;
function break75RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break75'-------
    t = 0;
    break75Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(60.000000);
    // update component parameters for each repeat
    if ((snapshot.thisN !== 287)) {
        continueRoutine = false;
    }
    
    break75_key.keys = undefined;
    break75_key.rt = undefined;
    _break75_key_allKeys = [];
    // keep track of which components have finished
    break75Components = [];
    break75Components.push(break75_text);
    break75Components.push(break75_key);
    
    break75Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break75RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break75'-------
    // get current time
    t = break75Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break75_text* updates
    if (t >= 0.0 && break75_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break75_text.tStart = t;  // (not accounting for frame time here)
      break75_text.frameNStart = frameN;  // exact frame index
      
      break75_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break75_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break75_text.setAutoDraw(false);
    }
    
    // *break75_key* updates
    if (t >= 0.0 && break75_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break75_key.tStart = t;  // (not accounting for frame time here)
      break75_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break75_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break75_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break75_key.clearEvents(); });
    }

    frameRemains = 0.0 + 60.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break75_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break75_key.status = PsychoJS.Status.FINISHED;
  }

    if (break75_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = break75_key.getKeys({keyList: ['space'], waitRelease: false});
      _break75_key_allKeys = _break75_key_allKeys.concat(theseKeys);
      if (_break75_key_allKeys.length > 0) {
        break75_key.keys = _break75_key_allKeys[_break75_key_allKeys.length - 1].name;  // just the last key pressed
        break75_key.rt = _break75_key_allKeys[_break75_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break75Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break75RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break75'-------
    break75Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('break75_key.keys', break75_key.keys);
    if (typeof break75_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break75_key.rt', break75_key.rt);
        routineTimer.reset();
        }
    
    break75_key.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
