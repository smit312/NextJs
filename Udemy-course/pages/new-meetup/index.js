import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React from "react";
import Layout from "../../components/layout/Layout";
const NewMeetupPage = () => {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  );
};

export default NewMeetupPage;
