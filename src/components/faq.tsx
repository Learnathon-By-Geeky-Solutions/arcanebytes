import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});
const faq = () => {
  return (
    <div>
      <h1 className={`${kelly.className} text-center text-3xl md:text-5xl`}>
        Frequently Asked Questions (FAQ)
      </h1>
      <section className="md:max-w-4xl mx-auto my-20">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            1. What is Kaizen?
          </div>
          <div className="collapse-content">
            <p>
              Kaizen is a gamified productivity application designed to help
              users overcome procrastination, build positive habits, and achieve
              their goals through small, consistent improvements. It combines
              AI-driven insights, habit tracking, and a reward system to make
              personal growth engaging and effective.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            2. How does Kaizen help with procrastination?
          </div>
          <div className="collapse-content">
            <p>
              Kaizen uses a combination of habit tracking, AI-based
              recommendations, and gamification elements like XP, streaks, and
              virtual rewards to keep users motivated. Additionally, features
              like the Delayed Pleasure System restrict distractions and
              encourage task completion before accessing leisure activities.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            3. How does the reward system work?
          </div>
          <div className="collapse-content">
            <p>
              Users earn XP (experience points) and virtual coins by completing
              tasks and maintaining streaks. These can be used to unlock in-app
              perks like motivational content, flashcards, and exclusive
              features. Users also receive badges for achieving milestones and
              can compete on leaderboards to stay motivated.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            4. Can I track my progress over time?
          </div>
          <div className="collapse-content">
            <p>
              Yes! Kaizen provides visual progress tracking through graphs,
              streak counters, and goal timelines. Users can break big goals
              into smaller milestones and track completion percentages.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            5. Does Kaizen have social or community features?
          </div>
          <div className="collapse-content">
            <p>
              Yes! Users can share their progress, participate in weekly/monthly
              leaderboards, and get inspired by best performer success stories.
              Top users may even gain access to exclusive private programs and
              rewards.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          6. What makes Kaizen different from other productivity apps?          
          </div>
          <div className="collapse-content">
            <p>
            Kaizen uniquely combines gamification, AI-driven insights, social accountability, and habit tracking to make personal growth engaging. Instead of traditional task management, it transforms productivity into a rewarding and interactive experience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          7. How do I get started with Kaizen?
                    </div>
          <div className="collapse-content">
            <p>
            Simply sign up, set your personal goals or challenges, and start tracking your progress! Kaizen will guide you with AI-powered suggestions, rewards, and insights to help you stay on track.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default faq;
