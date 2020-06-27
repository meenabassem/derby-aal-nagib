import React from "react";
import {TopStoriesListItem, TopStoriesListItemProps} from "components/TopStories/TopStoriesListItem";

type TopStoriesComponentProps = {
  stories: TopStoriesListItemProps[];
};
const TopStoriesComponent: React.FC<TopStoriesComponentProps> = (
  props: TopStoriesComponentProps
) => {
  const { stories } = props;

  return stories?.length ? (
    <div style={{ display: "block", margin: "20px auto" }}
    className={"col-lg-6 col-md-12"}>
      {stories.map((story, storyIndex) => (
        <TopStoriesListItem
          key={storyIndex}
          title={story?.title}
          body={story?.body}
        />
      ))}
    </div>
  ) : (
    <></>
  );
};
export {TopStoriesComponent};
export type { TopStoriesComponentProps };

