import React from 'react';

import Menu from './Menu';

import '../styles/layout/_about.scss'
import '../styles/layout/_note.scss'

class About extends React.Component {
    render() {
        return (
                <div className="about">
                    <Menu/>
                    <div className="about__head">
                        <div className="about__head-text">
                            <h1 className="about__head-text-title">About</h1>
                            <p className="about__head-text-lead">Listen, can you meet me at Twin Pines Mall tonight at 1:15?</p>
                        </div>
                    </div>

                    <div className="about__text">
                        <div className="note">
                            <h3 className="note__title"><span role="img" aria-label="magnifier">🔎</span> Summary</h3>
                            <p className="note__content">
                                Planning Poker is estimating technique designed as digital card game.
                                It helps development teams set sprint goals and estimate time through collaborative planning.
                                The key reason to use planning poker is to avoid the influence of the other team members.
                            </p>
                        </div>

                        <div className="note">
                            <h3 className="note__title"><span role="img" aria-label="dice">🎲</span> Rules</h3>
                            <p className="note__content">
                                The session starts immediately after team leader describes a feature that needs to be developed.
                                Every participant makes his decision about time needed to complete a task.
                                By default, players should not see other participants' votes before the voting process is concluded
                                — that’s why players show their cards at the same time.
                                The main idea is everyone voting independently and only afterwards talking about it.
                                The game ends when consensus is reached.
                            </p>
                        </div>

                        <div className="note">
                            <h3 className="note__title"><span role="img" aria-label="victory">✌</span>️ Fibonacci</h3>
                            <p className="note__content">
                                You can use any sequence you like to estimate a user story: linear, hours, days and even T-shirt sizes.
                                But we recommend you classic Fibonacci sequence:
                                &frac12; used for task almost completed, 1–3 — for small tasks, 5–13 — for medium sized tasks, 21–55 — for large aims.
                                The idea behind the Fibonacci sequence is that there is more sensitivity in small numbers and less sensitivity in large numbers.
                            </p>
                        </div>

                        <div className="note">
                            <h3 className="note__title"><span role="img" aria-label="time">⏱</span> Time</h3>
                            <p className="note__content">
                                Use a timer to limit discussion and make decision faster.
                                When there is a tie in the voting between two cards which are consecutive, just pick the larger size and move on.
                            </p>
                        </div>

                        <div className="note">
                            <h3 className="note__title"><span role="img" aria-label="win">🏆</span> Benefits</h3>
                            <p className="note__content">
                                The estimates based on group discussions are more accurate than the individual estimates.
                                Also, lively dialog between coworkers facilitates better understanding tasks and common strategy.
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default About;