import React from "react";

const ThreeTraits = () => {
  return (
    <section className="my-24">
      <h2 className="text-4xl ">I am a...</h2>

      <div className="flex flex-col lg:flex-row gap-3 ">
        <div className="flex flex-col items-center">
          <img src={"/reading.svg"} className="w-48 h-48" />
          <h3 className="text-2xl  tracking-widest">Reader</h3>
          <p className="text-center mt-10">
            I love to read and listen to audio books. I love to read books within personal-growth
            and self-development. My personal favorites are The Power of Habit and Atomic Habits.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/lightbulb.svg"} className="w-48 h-48" />
          <h3 className="text-2xl  tracking-widest">Thinker</h3>
          <p className="text-center mt-10">
            I've made it a habit to take a 25 minute walk every morning at 8am. During my walks I
            listen to an audiobook and just think. I get my creative ideas during this time.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/thinking.svg"} className="w-48 h-48" />
          <h3 className="text-2xl tracking-widest">Creative</h3>
          <p className="text-center mt-10">
            I love to implement my creative nature in anything I do. Being able to think outside the
            box and create something with your unique twist brings me great joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeTraits;
