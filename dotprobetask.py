#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Tue Feb 15 19:21:04 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'task2-5jan-v1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/jieminsun/Desktop/CAPSTONE/Dot-Probe-Task-Final/dotprobetask.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='#ffffff', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "reminderID"
reminderIDClock = core.Clock()
reminderIDText = visual.TextStim(win=win, name='reminderIDText',
    text='Before we begin, please ensure that you typed your PARTNER’s participant ID in the pop-up box before this. For example, if your ID is “f456”, please type in “m456” and vice versa. If you have typed another ID, please close this tab, exit the experiment and re-enter with your partner’s ID.\n\nIf you have correctly typed in your partner’s ID, click the SPACE button.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
reminderID_resp = keyboard.Keyboard()

# Initialize components for Routine "instr_practice"
instr_practiceClock = core.Clock()
instrText = visual.TextStim(win=win, name='instrText',
    text="Instructions: \nYou will be shown an image of an arrow either pointing up (“ᐁ”) or else pointing down (“ᐃ”). All you need to do is use the keys on your keyboard to indicate whether it is pointing up or down.\n\nOn each trial you will be briefly shown a plus sign (+), which you should look at to bring your attention to the center of the screen.\n\nThen as soon as you see an image of an arrow, quickly press the UP arrow key if the image is pointing up, and the DOWN arrow key if the image is pointing down.\n\nTo start a series of practice trials, just click the button below and then immediately place one of your fingers on the UP arrow key and one on the DOWN arrow key so you can answer quickly. \n\nWhen you're ready to continue, click the SPACE button.",
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instr_key_resp = keyboard.Keyboard()

# Initialize components for Routine "fixcross_prac"
fixcross_pracClock = core.Clock()
fc_prac = visual.TextStim(win=win, name='fc_prac',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "probe_resp_prac"
probe_resp_pracClock = core.Clock()
probe_prac = visual.TextStim(win=win, name='probe_prac',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='lightgrey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_prac = keyboard.Keyboard()

# Initialize components for Routine "feedback_prac"
feedback_pracClock = core.Clock()
feedbackText = visual.TextStim(win=win, name='feedbackText',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "instr_actual"
instr_actualClock = core.Clock()
instrText_2 = visual.TextStim(win=win, name='instrText_2',
    text='Now we are going to start with the real trials. On each trial you will see some faces, which you should try to ignore. Instead, just focus on the arrows as before: As soon as you see an image of an arrow, quickly press the UP arrow key if the image is pointing up, and the DOWN arrow key if the image is pointing down. \n\nBE ACCURATE - make sure you click the right button.\n\nTo start these real trials, click the SPACE button.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instr_key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "fixcross"
fixcrossClock = core.Clock()
# Set of values for the jittered inter-trial interval (ITI)
iti = [0.2, 0.4, 0.6, 0.8]
nBlocks = 96
jitter = []  

# Create blocks of random jitter 
for block in range(nBlocks):     
    # Append a random ample from the iti list     
    jitter.append(list(np.random.choice(iti, size=len(iti), replace=False)))      
    
# Flatten nested list 
jitter = [jit for sublist in jitter for jit in sublist]
fc = visual.TextStim(win=win, name='fc',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "stimulus"
stimulusClock = core.Clock()
# Set of values for the jittered inter-trial interval (ITI)
posphotos = [p1, p2, p3, p4, 
naphotos = [n1, n2, n3, n4, n5, n6, n7, n8, 
a1, a2, a3, a4, a5, a6, a7, a8]
nBlocks = 24
nBlocks2 = 48
jitter = []  

# Create blocks of random jitter 
for block in range(nBlocks):     
    # Append a random ample from the iti list     
    jitter.append(list(np.random.choice(iti, size=len(iti), replace=False)))      
    
# Flatten nested list 
jitter = [jit for sublist in jitter for jit in sublist]

positiveimage = visual.ImageStim(
    win=win,
    name='positiveimage', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=[0.39,0.5],
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
negaltimage = visual.ImageStim(
    win=win,
    name='negaltimage', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=[0.39, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
psychoJS.experiment.addData("FC_jitter", jitter[snapshot.thisN]);

# Initialize components for Routine "probe_resp"
probe_respClock = core.Clock()
probe = visual.TextStim(win=win, name='probe',
    text='',
    font='Open Sans',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
    color='lightgrey', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "break25"
break25Clock = core.Clock()
break25_text = visual.TextStim(win=win, name='break25_text',
    text='You’ve completed 25% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
break25_key = keyboard.Keyboard()

# Initialize components for Routine "break50"
break50Clock = core.Clock()
break50_text = visual.TextStim(win=win, name='break50_text',
    text='You’ve completed 50% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
break50_key = keyboard.Keyboard()

# Initialize components for Routine "break75"
break75Clock = core.Clock()
break75_text = visual.TextStim(win=win, name='break75_text',
    text='You’ve completed 75% of the trials. You may now take a break before resuming.\n\nPress the SPACE bar when you’re ready to start the next block of trials.\n\nIf you don’t press the SPACE bar, the next block of trials will start automatically in 1 minute.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
break75_key = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "reminderID"-------
continueRoutine = True
# update component parameters for each repeat
reminderID_resp.keys = []
reminderID_resp.rt = []
_reminderID_resp_allKeys = []
# keep track of which components have finished
reminderIDComponents = [reminderIDText, reminderID_resp]
for thisComponent in reminderIDComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
reminderIDClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "reminderID"-------
while continueRoutine:
    # get current time
    t = reminderIDClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=reminderIDClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *reminderIDText* updates
    if reminderIDText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        reminderIDText.frameNStart = frameN  # exact frame index
        reminderIDText.tStart = t  # local t and not account for scr refresh
        reminderIDText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(reminderIDText, 'tStartRefresh')  # time at next scr refresh
        reminderIDText.setAutoDraw(True)
    
    # *reminderID_resp* updates
    waitOnFlip = False
    if reminderID_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        reminderID_resp.frameNStart = frameN  # exact frame index
        reminderID_resp.tStart = t  # local t and not account for scr refresh
        reminderID_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(reminderID_resp, 'tStartRefresh')  # time at next scr refresh
        reminderID_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(reminderID_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(reminderID_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if reminderID_resp.status == STARTED and not waitOnFlip:
        theseKeys = reminderID_resp.getKeys(keyList=['space'], waitRelease=False)
        _reminderID_resp_allKeys.extend(theseKeys)
        if len(_reminderID_resp_allKeys):
            reminderID_resp.keys = _reminderID_resp_allKeys[-1].name  # just the last key pressed
            reminderID_resp.rt = _reminderID_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in reminderIDComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "reminderID"-------
for thisComponent in reminderIDComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "reminderID" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instr_practice"-------
continueRoutine = True
# update component parameters for each repeat
instr_key_resp.keys = []
instr_key_resp.rt = []
_instr_key_resp_allKeys = []
# keep track of which components have finished
instr_practiceComponents = [instrText, instr_key_resp]
for thisComponent in instr_practiceComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_practice"-------
while continueRoutine:
    # get current time
    t = instr_practiceClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_practiceClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instrText* updates
    if instrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrText.frameNStart = frameN  # exact frame index
        instrText.tStart = t  # local t and not account for scr refresh
        instrText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrText, 'tStartRefresh')  # time at next scr refresh
        instrText.setAutoDraw(True)
    
    # *instr_key_resp* updates
    waitOnFlip = False
    if instr_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_key_resp.frameNStart = frameN  # exact frame index
        instr_key_resp.tStart = t  # local t and not account for scr refresh
        instr_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_key_resp, 'tStartRefresh')  # time at next scr refresh
        instr_key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_key_resp.status == STARTED and not waitOnFlip:
        theseKeys = instr_key_resp.getKeys(keyList=['space'], waitRelease=False)
        _instr_key_resp_allKeys.extend(theseKeys)
        if len(_instr_key_resp_allKeys):
            instr_key_resp.keys = _instr_key_resp_allKeys[-1].name  # just the last key pressed
            instr_key_resp.rt = _instr_key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_practice"-------
for thisComponent in instr_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_trials = data.TrialHandler(nReps=2.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_practice_trial.xlsx'),
    seed=None, name='practice_trials')
thisExp.addLoop(practice_trials)  # add the loop to the experiment
thisPractice_trial = practice_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
if thisPractice_trial != None:
    for paramName in thisPractice_trial:
        exec('{} = thisPractice_trial[paramName]'.format(paramName))

for thisPractice_trial in practice_trials:
    currentLoop = practice_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
    if thisPractice_trial != None:
        for paramName in thisPractice_trial:
            exec('{} = thisPractice_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixcross_prac"-------
    continueRoutine = True
    routineTimer.add(0.300000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixcross_pracComponents = [fc_prac]
    for thisComponent in fixcross_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixcross_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixcross_prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixcross_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixcross_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fc_prac* updates
        if fc_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fc_prac.frameNStart = frameN  # exact frame index
            fc_prac.tStart = t  # local t and not account for scr refresh
            fc_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fc_prac, 'tStartRefresh')  # time at next scr refresh
            fc_prac.setAutoDraw(True)
        if fc_prac.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fc_prac.tStartRefresh + 0.3-frameTolerance:
                # keep track of stop time/frame for later
                fc_prac.tStop = t  # not accounting for scr refresh
                fc_prac.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fc_prac, 'tStopRefresh')  # time at next scr refresh
                fc_prac.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixcross_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixcross_prac"-------
    for thisComponent in fixcross_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # ------Prepare to start Routine "probe_resp_prac"-------
    continueRoutine = True
    # update component parameters for each repeat
    probe_prac.setPos([probe_leftorright_trial, 0])
    probe_prac.setText(probe_upordown_trial)
    key_resp_prac.keys = []
    key_resp_prac.rt = []
    _key_resp_prac_allKeys = []
    # keep track of which components have finished
    probe_resp_pracComponents = [probe_prac, key_resp_prac]
    for thisComponent in probe_resp_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    probe_resp_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "probe_resp_prac"-------
    while continueRoutine:
        # get current time
        t = probe_resp_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=probe_resp_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *probe_prac* updates
        if probe_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            probe_prac.frameNStart = frameN  # exact frame index
            probe_prac.tStart = t  # local t and not account for scr refresh
            probe_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(probe_prac, 'tStartRefresh')  # time at next scr refresh
            probe_prac.setAutoDraw(True)
        if probe_prac.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > probe_prac.tStartRefresh + 10.0-frameTolerance:
                # keep track of stop time/frame for later
                probe_prac.tStop = t  # not accounting for scr refresh
                probe_prac.frameNStop = frameN  # exact frame index
                win.timeOnFlip(probe_prac, 'tStopRefresh')  # time at next scr refresh
                probe_prac.setAutoDraw(False)
        
        # *key_resp_prac* updates
        waitOnFlip = False
        if key_resp_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_prac.frameNStart = frameN  # exact frame index
            key_resp_prac.tStart = t  # local t and not account for scr refresh
            key_resp_prac.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_prac, 'tStartRefresh')  # time at next scr refresh
            key_resp_prac.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_prac.clock.reset)  # t=0 on next screen flip
        if key_resp_prac.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_prac.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_prac_allKeys.extend(theseKeys)
            if len(_key_resp_prac_allKeys):
                key_resp_prac.keys = _key_resp_prac_allKeys[-1].name  # just the last key pressed
                key_resp_prac.rt = _key_resp_prac_allKeys[-1].rt
                # was this correct?
                if (key_resp_prac.keys == str(corrAns_trial)) or (key_resp_prac.keys == corrAns_trial):
                    key_resp_prac.corr = 1
                else:
                    key_resp_prac.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in probe_resp_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "probe_resp_prac"-------
    for thisComponent in probe_resp_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "probe_resp_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback_prac"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    if key_resp_prac.corr:
        msg = "Correct! "
        msgColor = "green"
    else:
        msg = "Oops, that was wrong."
        msgColor = "red"
    feedbackText.setColor(msgColor, colorSpace='rgb')
    feedbackText.setText(msg)
    # keep track of which components have finished
    feedback_pracComponents = [feedbackText]
    for thisComponent in feedback_pracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_pracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback_pracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_pracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedbackText* updates
        if feedbackText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackText.frameNStart = frameN  # exact frame index
            feedbackText.tStart = t  # local t and not account for scr refresh
            feedbackText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackText, 'tStartRefresh')  # time at next scr refresh
            feedbackText.setAutoDraw(True)
        if feedbackText.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedbackText.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                feedbackText.tStop = t  # not accounting for scr refresh
                feedbackText.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedbackText, 'tStopRefresh')  # time at next scr refresh
                feedbackText.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback_pracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_prac"-------
    for thisComponent in feedback_pracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    practice_trials.addData('feedbackText.started', feedbackText.tStartRefresh)
    practice_trials.addData('feedbackText.stopped', feedbackText.tStopRefresh)
    thisExp.nextEntry()
    
# completed 2.0 repeats of 'practice_trials'


# ------Prepare to start Routine "instr_actual"-------
continueRoutine = True
# update component parameters for each repeat
instr_key_resp_2.keys = []
instr_key_resp_2.rt = []
_instr_key_resp_2_allKeys = []
# keep track of which components have finished
instr_actualComponents = [instrText_2, instr_key_resp_2]
for thisComponent in instr_actualComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_actualClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_actual"-------
while continueRoutine:
    # get current time
    t = instr_actualClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_actualClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instrText_2* updates
    if instrText_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrText_2.frameNStart = frameN  # exact frame index
        instrText_2.tStart = t  # local t and not account for scr refresh
        instrText_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrText_2, 'tStartRefresh')  # time at next scr refresh
        instrText_2.setAutoDraw(True)
    
    # *instr_key_resp_2* updates
    waitOnFlip = False
    if instr_key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_key_resp_2.frameNStart = frameN  # exact frame index
        instr_key_resp_2.tStart = t  # local t and not account for scr refresh
        instr_key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_key_resp_2, 'tStartRefresh')  # time at next scr refresh
        instr_key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = instr_key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _instr_key_resp_2_allKeys.extend(theseKeys)
        if len(_instr_key_resp_2_allKeys):
            instr_key_resp_2.keys = _instr_key_resp_2_allKeys[-1].name  # just the last key pressed
            instr_key_resp_2.rt = _instr_key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_actualComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_actual"-------
for thisComponent in instr_actualComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr_actual" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=24.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions-new.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixcross"-------
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData("FC_jitter", jitter[snapshot.thisN])
    # keep track of which components have finished
    fixcrossComponents = [fc]
    for thisComponent in fixcrossComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixcrossClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixcross"-------
    while continueRoutine:
        # get current time
        t = fixcrossClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixcrossClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fc* updates
        if fc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fc.frameNStart = frameN  # exact frame index
            fc.tStart = t  # local t and not account for scr refresh
            fc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fc, 'tStartRefresh')  # time at next scr refresh
            fc.setAutoDraw(True)
        if fc.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fc.tStartRefresh + jitter[snapshot.thisN]-frameTolerance:
                # keep track of stop time/frame for later
                fc.tStop = t  # not accounting for scr refresh
                fc.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fc, 'tStopRefresh')  # time at next scr refresh
                fc.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixcrossComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixcross"-------
    for thisComponent in fixcrossComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "fixcross" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "stimulus"-------
    continueRoutine = True
    # update component parameters for each repeat
    positiveimage.setPos([pos_leftorright, 0])
    positiveimage.setImage(positivefilepaths[snapshot.thisN])
    negaltimage.setPos([na_leftorright, 0])
    negaltimage.setImage(negaltfilepaths[snapshot.thisN])
    psychoJS.experiment.addData("posimage", positive[snapshot.thisN]);
    psychoJS.experiment.addData("negaltimage", negalt[snapshot.thisN]);
    # keep track of which components have finished
    stimulusComponents = [positiveimage, negaltimage]
    for thisComponent in stimulusComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stimulusClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stimulus"-------
    while continueRoutine:
        # get current time
        t = stimulusClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stimulusClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *positiveimage* updates
        if positiveimage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            positiveimage.frameNStart = frameN  # exact frame index
            positiveimage.tStart = t  # local t and not account for scr refresh
            positiveimage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(positiveimage, 'tStartRefresh')  # time at next scr refresh
            positiveimage.setAutoDraw(True)
        if positiveimage.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > SOA[snapshot.thisN]-frameTolerance:
                # keep track of stop time/frame for later
                positiveimage.tStop = t  # not accounting for scr refresh
                positiveimage.frameNStop = frameN  # exact frame index
                win.timeOnFlip(positiveimage, 'tStopRefresh')  # time at next scr refresh
                positiveimage.setAutoDraw(False)
        
        # *negaltimage* updates
        if negaltimage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            negaltimage.frameNStart = frameN  # exact frame index
            negaltimage.tStart = t  # local t and not account for scr refresh
            negaltimage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(negaltimage, 'tStartRefresh')  # time at next scr refresh
            negaltimage.setAutoDraw(True)
        if negaltimage.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > SOA[snapshot.thisN]-frameTolerance:
                # keep track of stop time/frame for later
                negaltimage.tStop = t  # not accounting for scr refresh
                negaltimage.frameNStop = frameN  # exact frame index
                win.timeOnFlip(negaltimage, 'tStopRefresh')  # time at next scr refresh
                negaltimage.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stimulusComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stimulus"-------
    for thisComponent in stimulusComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "stimulus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "probe_resp"-------
    continueRoutine = True
    # update component parameters for each repeat
    probe.setPos([probe_leftorright, 0])
    probe.setText(probe_upordown)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    probe_respComponents = [probe, key_resp]
    for thisComponent in probe_respComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    probe_respClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "probe_resp"-------
    while continueRoutine:
        # get current time
        t = probe_respClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=probe_respClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *probe* updates
        if probe.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            probe.frameNStart = frameN  # exact frame index
            probe.tStart = t  # local t and not account for scr refresh
            probe.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(probe, 'tStartRefresh')  # time at next scr refresh
            probe.setAutoDraw(True)
        if probe.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > probe.tStartRefresh + 10.0-frameTolerance:
                # keep track of stop time/frame for later
                probe.tStop = t  # not accounting for scr refresh
                probe.frameNStop = frameN  # exact frame index
                win.timeOnFlip(probe, 'tStopRefresh')  # time at next scr refresh
                probe.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # was this correct?
                if (key_resp.keys == str(corrAns)) or (key_resp.keys == corrAns):
                    key_resp.corr = 1
                else:
                    key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in probe_respComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "probe_resp"-------
    for thisComponent in probe_respComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp.corr = 1;  # correct non-response
        else:
           key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_resp.keys',key_resp.keys)
    trials.addData('key_resp.corr', key_resp.corr)
    if key_resp.keys != None:  # we had a response
        trials.addData('key_resp.rt', key_resp.rt)
    # the Routine "probe_resp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "break25"-------
    continueRoutine = True
    routineTimer.add(60.000000)
    # update component parameters for each repeat
    if trials.thisN != 95:
        continueRoutine = False
    break25_key.keys = []
    break25_key.rt = []
    _break25_key_allKeys = []
    # keep track of which components have finished
    break25Components = [break25_text, break25_key]
    for thisComponent in break25Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break25Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break25"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = break25Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break25Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break25_text* updates
        if break25_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break25_text.frameNStart = frameN  # exact frame index
            break25_text.tStart = t  # local t and not account for scr refresh
            break25_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break25_text, 'tStartRefresh')  # time at next scr refresh
            break25_text.setAutoDraw(True)
        if break25_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break25_text.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break25_text.tStop = t  # not accounting for scr refresh
                break25_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break25_text, 'tStopRefresh')  # time at next scr refresh
                break25_text.setAutoDraw(False)
        
        # *break25_key* updates
        waitOnFlip = False
        if break25_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break25_key.frameNStart = frameN  # exact frame index
            break25_key.tStart = t  # local t and not account for scr refresh
            break25_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break25_key, 'tStartRefresh')  # time at next scr refresh
            break25_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(break25_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(break25_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if break25_key.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break25_key.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break25_key.tStop = t  # not accounting for scr refresh
                break25_key.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break25_key, 'tStopRefresh')  # time at next scr refresh
                break25_key.status = FINISHED
        if break25_key.status == STARTED and not waitOnFlip:
            theseKeys = break25_key.getKeys(keyList=['space'], waitRelease=False)
            _break25_key_allKeys.extend(theseKeys)
            if len(_break25_key_allKeys):
                break25_key.keys = _break25_key_allKeys[-1].name  # just the last key pressed
                break25_key.rt = _break25_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break25Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break25"-------
    for thisComponent in break25Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('break25_text.started', break25_text.tStartRefresh)
    trials.addData('break25_text.stopped', break25_text.tStopRefresh)
    # check responses
    if break25_key.keys in ['', [], None]:  # No response was made
        break25_key.keys = None
    trials.addData('break25_key.keys',break25_key.keys)
    if break25_key.keys != None:  # we had a response
        trials.addData('break25_key.rt', break25_key.rt)
    
    # ------Prepare to start Routine "break50"-------
    continueRoutine = True
    routineTimer.add(60.000000)
    # update component parameters for each repeat
    if trials.thisN != 191:
        continueRoutine = False
    break50_key.keys = []
    break50_key.rt = []
    _break50_key_allKeys = []
    # keep track of which components have finished
    break50Components = [break50_text, break50_key]
    for thisComponent in break50Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break50Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break50"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = break50Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break50Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break50_text* updates
        if break50_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break50_text.frameNStart = frameN  # exact frame index
            break50_text.tStart = t  # local t and not account for scr refresh
            break50_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break50_text, 'tStartRefresh')  # time at next scr refresh
            break50_text.setAutoDraw(True)
        if break50_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break50_text.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break50_text.tStop = t  # not accounting for scr refresh
                break50_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break50_text, 'tStopRefresh')  # time at next scr refresh
                break50_text.setAutoDraw(False)
        
        # *break50_key* updates
        waitOnFlip = False
        if break50_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break50_key.frameNStart = frameN  # exact frame index
            break50_key.tStart = t  # local t and not account for scr refresh
            break50_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break50_key, 'tStartRefresh')  # time at next scr refresh
            break50_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(break50_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(break50_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if break50_key.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break50_key.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break50_key.tStop = t  # not accounting for scr refresh
                break50_key.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break50_key, 'tStopRefresh')  # time at next scr refresh
                break50_key.status = FINISHED
        if break50_key.status == STARTED and not waitOnFlip:
            theseKeys = break50_key.getKeys(keyList=['space'], waitRelease=False)
            _break50_key_allKeys.extend(theseKeys)
            if len(_break50_key_allKeys):
                break50_key.keys = _break50_key_allKeys[-1].name  # just the last key pressed
                break50_key.rt = _break50_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break50Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break50"-------
    for thisComponent in break50Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('break50_text.started', break50_text.tStartRefresh)
    trials.addData('break50_text.stopped', break50_text.tStopRefresh)
    # check responses
    if break50_key.keys in ['', [], None]:  # No response was made
        break50_key.keys = None
    trials.addData('break50_key.keys',break50_key.keys)
    if break50_key.keys != None:  # we had a response
        trials.addData('break50_key.rt', break50_key.rt)
    
    # ------Prepare to start Routine "break75"-------
    continueRoutine = True
    routineTimer.add(60.000000)
    # update component parameters for each repeat
    if trials.thisN != 287:
        continueRoutine = False
    break75_key.keys = []
    break75_key.rt = []
    _break75_key_allKeys = []
    # keep track of which components have finished
    break75Components = [break75_text, break75_key]
    for thisComponent in break75Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break75Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break75"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = break75Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break75Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *break75_text* updates
        if break75_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break75_text.frameNStart = frameN  # exact frame index
            break75_text.tStart = t  # local t and not account for scr refresh
            break75_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break75_text, 'tStartRefresh')  # time at next scr refresh
            break75_text.setAutoDraw(True)
        if break75_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break75_text.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break75_text.tStop = t  # not accounting for scr refresh
                break75_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break75_text, 'tStopRefresh')  # time at next scr refresh
                break75_text.setAutoDraw(False)
        
        # *break75_key* updates
        waitOnFlip = False
        if break75_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break75_key.frameNStart = frameN  # exact frame index
            break75_key.tStart = t  # local t and not account for scr refresh
            break75_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break75_key, 'tStartRefresh')  # time at next scr refresh
            break75_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(break75_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(break75_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if break75_key.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break75_key.tStartRefresh + 60.0-frameTolerance:
                # keep track of stop time/frame for later
                break75_key.tStop = t  # not accounting for scr refresh
                break75_key.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break75_key, 'tStopRefresh')  # time at next scr refresh
                break75_key.status = FINISHED
        if break75_key.status == STARTED and not waitOnFlip:
            theseKeys = break75_key.getKeys(keyList=['space'], waitRelease=False)
            _break75_key_allKeys.extend(theseKeys)
            if len(_break75_key_allKeys):
                break75_key.keys = _break75_key_allKeys[-1].name  # just the last key pressed
                break75_key.rt = _break75_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break75Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break75"-------
    for thisComponent in break75Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('break75_text.started', break75_text.tStartRefresh)
    trials.addData('break75_text.stopped', break75_text.tStopRefresh)
    # check responses
    if break75_key.keys in ['', [], None]:  # No response was made
        break75_key.keys = None
    trials.addData('break75_key.keys',break75_key.keys)
    if break75_key.keys != None:  # we had a response
        trials.addData('break75_key.rt', break75_key.rt)
    thisExp.nextEntry()
    
# completed 24.0 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
