// About Us page link in Footer.

import React from "react";

const About = () => {
    return (
        <div className="max-w-3xl mx-auto text-center font-sans">
            <h1 className="mt-12 text-4xl font-bold">ABOUT</h1>
            <h2 className="mt-4 text-lg italic text-gray-600">
                "Wonderful are your works; my soul knows it very well."
            </h2>
            <hr className="my-8 border-t-2 border-gray-300" />

            <section className="flex flex-col md:flex-row justify-between items-start mb-10">
                <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                    <p className="text-lg leading-7">
                        Hello! <br />
                        My name is Damaris, and I'm glad you're here.
                    </p>
                    <p className="text-lg leading-7 mt-4">
                        Let me start by sharing the story of how this place came
                        to be. As a Christian, I have always wanted to
                        experience miracles. However, I noticed that many
                        people, myself included, often feel shy or unsure about
                        sharing these personal moments. We may lack a supportive
                        community to turn to, or simply feel hesitant to share
                        our experiences with others.
                    </p>
                    <p className="text-lg leading-7 mt-4">
                        This realization sparked the idea for this website, a
                        place where you can feel comfortable sharing your
                        miracles.
                    </p>
                    <p className="text-lg leading-7 mt-4">
                        The vision I had in mind is a place to inspire and
                        uplift others, creating a deeper connection with God.
                        Reading stories that open your eyes to the wonders
                        around you, encouraging you to stay aware and inspired.
                        This is that place—a community where you are free to
                        share anything you wish, from brief moments of grace to
                        life-changing events. Here, you are welcomed with open
                        arms to feel free, connected, and inspired.
                    </p>
                </div>

                <div className="md:w-1/2 px-4">
                    <p className="text-lg leading-7">
                        Before my journey to becoming a developer, I started
                        writing miracles in a small notepad. After finishing my
                        bootcamp, I thought it would be a great idea to have a
                        place where everyone could write on this "notepad". So,
                        I decided to develop this website. After many struggles
                        and restarting at least twice, I decided it was time to
                        host the website so I could share it with others.
                    </p>

                    <p className="text-lg leading-7 mt-4">
                        I will keep working on this project, adding new
                        features, exploring ideas, and growing alongside it. I
                        hope that in years to come, I can look back on this
                        moment and remember the experience fondly.
                    </p>
                    <p className="text-lg leading-7 mt-4">
                        Thank you for being here, and I hope you find this space
                        as comforting and inspiring as I envisioned it to be.
                    </p>
                    <p className="text-lg leading-7 mt-4">
                        With gratitude, <br />
                        Damaris
                    </p>
                </div>
            </section>
            <hr className="my-8 border-t-2 border-gray-300" />
        </div>
    );
};

export default About;
