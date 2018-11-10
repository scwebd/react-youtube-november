import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import VideoDetail from "./components/VideoDetail";
const apiKey = "AIzaSyB4cTqGuQrBMNxeQGDD5FZdTLuK5P80NZA";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null    
  }

  componentDidMount() {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
          key: apiKey,
          part: "snippet",
          q: "sugar glider",
          maxResults: 10
      }    
    })
    .then(data => data.data.items)
    .then(videos => this.setState({ videos: videos, selectedVideo: videos[0] }))
    .catch(err => console.log(err));   
  }
    
  render() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Search Bar</h2>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <VideoDetail selectedVideo={this.state.selectedVideo} />
                </Col>
                <Col md={4}>
                    <h2>Video List</h2>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
