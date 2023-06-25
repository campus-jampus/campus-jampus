import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Col, Container, Row, Nav, Image, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Container fluid id="landing" className="px-0">
      <Container id="landing-center" className="d-flex align-items-center justify-content-center">
        <Row className="text-center">
          <Col className="d-flex flex-column justify-content-center">
            <h1 className="display-2"><strong>Welcome to</strong></h1>
            <Col className="align-middle text-center py-4">
              <Image src="/images/campus-jampus-logo.png" width="700px" />
            </Col>
          </Col>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <Col className="d-grid gap-2 col-6 mx-auto">
                <Button className="btn btn-light btn-lg py-3" as={NavLink} to="/register">
                  <strong>Register</strong>
                </Button>
                <Button className="btn btn-light btn-lg py-3" as={NavLink} to="/signin">
                  <strong>Sign in</strong>
                </Button>
              </Col>
            ) : (
              <Col className="d-grid gap-2 col-6 mx-auto">
                <Button className="btn btn-light btn-lg py-3" as={NavLink} to="/discover">
                  <strong>Discover Other Musicians</strong>
                </Button>
                <Button className="btn btn-light btn-lg py-3" as={NavLink} to="/profile">
                  <strong>View Your Profile</strong>
                </Button>
              </Col>
            )}
          </Nav>
        </Row>
      </Container>
      <Container fluid id="landing-info" className="mt-5 .bg-gradient">
        <Container className="py-5">
          <h1>Ready to explore Campus Jampus?</h1>
          <Stack className="figure float-end ps-4">
            <Image src="/images/userguide/userGuide6.png" rounded thumbnail />
            <Image src="/images/userguide/userGuide7.png" rounded thumbnail />
            <Image src="/images/userguide/userGuide8.png" rounded thumbnail />
          </Stack>
          <p>
            Campus Jampus is a web app that brings UH musicians together for jam sessions and bands.
            It helps them find like-minded peers with compatible musical abilities by creating profiles based on musical tastes, capabilities, and goals.
            Musicians can connect, schedule meetups, and discover new groups to join or enjoy.
          </p>
          <p>
            Log in, create your profile, and look for other musicians to connect with!
          </p>
          <h3>User Guide</h3>
          <p>
            If this is your first time here,
            after registration you will also be prompted to fill in some information about yourself.
            This allows other users with similar interests to potentially reach out and connect with you.
          </p>
          <p>
            All this information will also appear on your profile, which you can edit at any time. You can put in your
            name, what instrument you play, an image to represent you, what your preferred genre is, and your skill
            level. Since Campus Jampus encourages musicians to come together, There are also two options for you to
            check: if you are open to informal jams with other musicians, or if you are seeking a band to join. You are
            also able to add external social media links to help others understand what kind of music you create, also making connecting with one another easier. Make sure the link starts with `https://`!
            <br /><br />
            Once you hit submit, you will find your profile all set and ready for you! If you wish to change your
            information, simply click the edit button once more and you can edit your information all you want.
          </p>
          <p>
            When you think your profile looks good, head over to the <b>Discover</b> page on the navigation bar. Here you
            will find all your fellow musicians who also use Campus Jampus. The <b>Discover</b> page gives you all the information you need about them.
          </p>
          <p>We appreciate all that use Campus Jampus!</p>
        </Container>
        <Container id="landing-footer" className="py-5">
          <Row>
            <Col>
              <h4>Campus Jampus is currently maintained by:</h4>
              <ul>
                <li>- <a href="https://github.com/kendalo-tech">Kendal Oya</a></li>
                <li>- <a href="https://github.com/tevin-takata">Tevin Takata</a></li>
                <li>- <a href="https://github.com/NickTaka">Nick Takamatsu</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Landing;
