import React from "react";
import styled from "styled-components";
import { FollowerItemQuery } from "./FollowerItem";

const FollowerListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  max-height: 500px;
  overflow-y: auto;

  h3 {
    font-weight: 500;
    margin: 0;
    color: var(--primaryColor);
  }

  .div-divider {
    height: 1px;
    background-color: var(--primaryColor);
    opacity: 0.3;
    width: 40%;
    margin-bottom: 2rem;
  }
`;

const FollowersList = ({ close, followers, follows }) => {
  {
    if (followers.length === 0) {
      return (
        <FollowerListStyles>
          <h3>This is as empty as the soul</h3>
        </FollowerListStyles>
      );
    } else {
      return (
        <FollowerListStyles>
          {follows ? <h3>Following</h3> : <h3>Followers List</h3>}
          <div className="div-divider"></div>
          {followers.map((follower) => {
            return (
              <FollowerItemQuery
                key={follower.id}
                username={follower.username}
                close={close}
              />
            );
          })}
        </FollowerListStyles>
      );
    }
  }
};

export default FollowersList;
