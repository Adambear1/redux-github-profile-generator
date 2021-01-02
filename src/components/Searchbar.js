import React, { useMemo } from "react";
import { connect } from "react-redux";
import { getAll } from "../actions";

function Searchbar({ dispatch, getAll }) {
  useMemo(() => {
    getAll();
  }, []);
  return (
    <>
      <input type="text" />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      dispatch(getAll());
    },
  };
};

export default connect(null, mapDispatchToProps)(Searchbar);
