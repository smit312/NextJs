import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5sdHG1khCzXQLSae4_CSUWFbx1Un2-7Vpg&usqp=CAU"
      title="First meetup"
      address="AHMEDABAD"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupid = context.params.meetupid;
  console.log(meetupid);
  return {
    props: {
      meetupData: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5sdHG1khCzXQLSae4_CSUWFbx1Un2-7Vpg&usqp=CAU",
        id: meetupid,
        id: "m1",
        title: "First meetup",
        address: "AHMEDABAD",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetails;
