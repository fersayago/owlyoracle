import { redirect } from "next/navigation";

import FeedWrapper from "@/components/feed-wrapper";
import UserProgress from "@/components/user-progress";
import StickyWrapper from "@/components/sticky-wrapper";
import {
  getCourseProgress,
  getUnits,
  getUserProgress,
  getLessonPercentage,
} from "@/db/queries";

import Header from "./header";
import Unit from "./unit";

const Learn = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const getLessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();

  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    getLessonPercentageData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default Learn;
