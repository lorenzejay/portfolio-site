import React from "react";

const ThreeTraits = () => {
  return (
    <section className="mt-24 ">
      <h2 className="text-4xl ">I am a...</h2>

      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="flex flex-col items-center mt-4">
          <img src={"/reading.svg"} alt="thumnail of my character traits" className="w-48 h-48" />
          <h3 className="text-2xl  tracking-widest">Reader</h3>
          <p className="text-center mt-10 xl:text-lg">
            I love to read and listen to audio books. The genre I read lay within personal-growth
            and self-development. My personal favorites are "The Power of Habit" and "Atomic
            Habits".
          </p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <img src={"/lightbulb.svg"} alt="thumnail of my character traits" className="w-48 h-48" />
          <h3 className="text-2xl  tracking-widest">Thinker</h3>
          <p className="text-center mt-10 xl:text-lg">
            I've made it a habit to take a 25 minute walk every morning at 8am. During my walks I
            just think. Think about my plan for the day as well as develop fun and creative ideas.
          </p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <img src={"/thinking.svg"} alt="thumnail of my character traits" className="w-48 h-48" />
          <h3 className="text-2xl tracking-widest">Creative</h3>
          <p className="text-center mt-10 xl:text-lg">
            I love to implement my creative nature in anything I do. Being able to think outside the
            box and create something with your unique twist brings me great joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeTraits;
