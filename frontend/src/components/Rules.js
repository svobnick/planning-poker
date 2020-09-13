import React from 'react';

import '../styles/layout/_about.scss'
import '../styles/layout/_note.scss'

import Menu from "./Menu";
import Back from "./Back";

import Chart from '../images/chart.png'


class Rules extends React.Component {
    render() {
        return (
            <div className="about">
                <Menu/>
                <div className="about__head">
                    <img className="about__head-img" alt="rules logo" src={Chart} />
                    <h1 className="about__head-title">How It Works</h1>
                    <p className="about__head-lead">Listen, can you meet me at Twin Pines Mall tonight at 1:15?</p>
                </div>

                <div className="about__text">
                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="partyhat">🎉</span> Start</h3>
                        <p className="note__content">
                            Enter your name so other players can see who you are.
                            After that, you can create a new room or join an existing one — just paste the link into the special field.
                        </p>
                    </div>

                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="thinking">🤔</span> Invite team</h3>
                        <p className="note__content">
                            You can start session with as many people as you want.
                            After authorization you’ll get access to the playing field — and you can add folks here.
                            Copy link or page URL and send it to other players on your team.
                            The list of participants will be shown on main page.
                        </p>
                    </div>

                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="box">🗳</span> Vote</h3>
                        <p className="note__content">
                            Firstly introduce the task in details the team is going to estimate.
                            You can add description into special form — it will updating in realtime without any additional actions.
                            Every participant then makes his decision about time needed to complete a task.
                            Exact values are hidden until the session’s end, but it is obvious who voted and who isn't.
                            If you’ve changed mind about your choice, you can replace it.
                        </p>
                    </div>

                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="hourglass">⌛</span> Finishing</h3>
                        <p className="note__content">
                            The play ends when all voted or any player pressed the button «Stop» near the timer.
                        </p>
                    </div>

                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="chart">📊</span> Statistics</h3>
                        <p className="note__content">
                            Our stats includes data about average result of the voting, time spent, number of estimates and voting distribution.
                            You can use this information in group discussion and decision making process.
                        </p>
                    </div>

                    <div className="note">
                        <h3 className="note__title"><span role="img" aria-label="refresh">🔄</span> Play again</h3>
                        <p className="note__content">
                            If you want continue setting sprint goals with the same team, proceed by clicking the appropriate button.
                            When your pointing session is over, you can simply close your web page, and you will be automatically remove from the room.
                        </p>
                    </div>

                </div>
                <Back/>
            </div>
        );
    }
}

export default Rules;