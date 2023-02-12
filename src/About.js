import { Component } from "react";

import authorInfo from "./authors.json";
import AuthorCard from "./AuthorCard";

class Profile extends Component {

  render() {
    return(
      <>
        {authorInfo.map(person => <AuthorCard
          key={person.key}
          name={person.name}
          img_Url={person.image_url}
          description={person.description}
        />)}
      </>
    )
  }
};

export default Profile;

