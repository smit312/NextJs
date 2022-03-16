import React, { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5sdHG1khCzXQLSae4_CSUWFbx1Un2-7Vpg&usqp=CAU",
    address: "Ahmedabad",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5sdHG1khCzXQLSae4_CSUWFbx1Un2-7Vpg&usqp=CAU",
    address: "Ahmedabad",
    description: "this is a second meetup!",
  },
];

const HomePage = (props) => {
  return (
    <div>
      {/* <h1>HomePage</h1> */}
      <MeetupList meetups={props.meetups} />
    </div>
  );
};
export async function getStaticProps() {
  //fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
