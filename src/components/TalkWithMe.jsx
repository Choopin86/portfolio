import React from "react";

const classOptions = [
  {
    title: "25-Minute Speaking Class",
    price: "€10/class",
    description: [
      "Choose your topic, or",
      "Let me choose based on your interests, or",
      "Have a free conversation.",
    ],
    emailSubject: "Talk With Me - 25-Minute Class",
    emailBody: `Hi Ledjan,

I'm interested in taking the 25-minute speaking class. Please send me the Google Form so I can choose the class format.

Thank you!`,
  },
  {
    title: "50-Minute Private Class",
    price: "€20/class",
    description: [
      "Includes a topic for discussion.",
      "Grammar point, exercises, and more.",
      "1-on-1 private format.",
    ],
    emailSubject: "Talk With Me - Private Class",
    emailBody: `Hi Ledjan,

I'm interested in taking the 50-minute private class. Please send me the Google Form so I can proceed.

Thank you!`,
  },
  {
    title: "50-Minute Group Class",
    price: "€17/class",
    description: [
      "Includes a topic for discussion.",
      "Grammar point, exercises, and more.",
      "Collaborative group setting.",
    ],
    emailSubject: "Talk With Me - Group Class",
    emailBody: `Hi Ledjan,

I'm interested in taking the 50-minute group class. Please send me the Google Form so I can proceed.

Thank you!`,
  },
];

const TalkWithMe = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 pt-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Talk With Me</h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
        Choose the class format that suits you best. When you're ready, click
        "Contact me to start" — this will open your email client with a message
        ready to send.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {classOptions.map((option, index) => {
          const mailtoLink = `mailto:ledjanmicani@gmail.com?subject=${encodeURIComponent(
            option.emailSubject
          )}&body=${encodeURIComponent(option.emailBody)}`;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
                <p className="text-lg text-indigo-600 font-medium mb-4">
                  {option.price}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {option.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic">
                  You'll be asked to provide details through a Google Form after
                  contacting me.
                </p>
              </div>
              <a
                href={mailtoLink}
                className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl text-center hover:bg-indigo-700 transition"
              >
                Contact me to start
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TalkWithMe;
