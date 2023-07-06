import styled from "styled-components";

export default function Comments({ comments }) {
  return (
    <div>
      <H2>Comments</H2>
      {comments.map((comment, index) => (
        <Li key={index}>
          <strong>{comment.text}</strong>
          <div>
            <P>({comment.dateTime})</P>
          </div>
        </Li>
      ))}
    </div>
  );
}

const H2 = styled.h2`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  display: flex;
  margin-left: 10%;
  font-size: larger;
  font-family: serif;
  color: aliceblue;
  background-color: #896e6e;
  width: 60%;
  border-radius: 10px;
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  color: darkblue;
`;
