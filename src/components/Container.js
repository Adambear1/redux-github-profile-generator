import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function Container({ user }) {
  console.log(user);
  return (
    <div>
      {user &&
        user.map(({ email, phone, picture, name }) => {
          <Card email={email} phone={phone} picture={picture} name={name} />;
        })}
    </div>
  );
}
const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Container);
