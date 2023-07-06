import { useState } from "react";
import styled from "styled-components";

export default function CommentArtPieces({ onSubmitComment }) {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data.commentName); //commentName: askj

    onSubmitComment(data.commentName);

    // const inputValue = e.target.elements;
    // console.log(inputValue.value);
    //onSubmitComment(inputValue.value);
    // setComment(inputValue);
    // console.log(inputValue, "inputValue");

    e.target.reset();
  }

  return (
    <>
      <FORM onSubmit={handleSubmit}>
        <h1>Comment List</h1>

        <div>
          <div>
            <LABEL htmlFor="commentName">Write A Comment</LABEL>
          </div>
          <br />
          <TEXT
            id="commentName"
            name="commentName"
            placeholder="leave a comment"
            rows={10}
            columns={90}
          ></TEXT>
        </div>
        <br />
        <Button type="submit">Submit</Button>
        <div></div>
      </FORM>
    </>
  );
}

const LABEL = styled.label`
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: #2a1d72;
`;

const TEXT = styled.textarea`
  display: flex;
  justify-content: center;
  margin-left: 40%;
  height: 90px;
  width: 20%;
`;

const FORM = styled.form`
  height: 300px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 40%;
  font-size: 30px;
  border-radius: 10px;
  background-color: black;
  color: aliceblue;
`;
