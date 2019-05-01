import React, { useState } from "react";
import styled from "@emotion/styled";
import useInterval from "@use-it/interval";
import axios from "axios";

const LeaderboardItem = styled.div({
  display: "flex"
});

const Username = styled.div({
  marginLeft: "1.5rem"
});

const TotalUsers = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  margin: "0 4rem"
});

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get("https://sg1xdt2fv7.execute-api.us-east-1.amazonaws.com/dev/quizzes")
      .then(({ data }) => setUsers(data));
  };

  useInterval(() => {
    fetchData();
  }, 3000);

  const correctAnswers = ["A", "C", "C", "D", "D"];

  const usersWithScores = users.map(user => {
    const score = user.answers.reduce((total, answer, i) => {
      const answerScore =
        answer.toUpperCase() === correctAnswers[i].toUpperCase() ? 100 : 0;
      total += answerScore;
      return total;
    }, 0);
    if (!score) {
      return null;
    }
    const timeScore = Math.max(
      100 -
        Math.round(
          (new Date(user.completionTime) - new Date(user.startTime)) / 1000
        ),
      0
    );
    return {
      username: user.username,
      score: score + timeScore
    };
  });

  const sortedUsers = usersWithScores
    .filter(x => x)
    .sort((a, b) => (a.score < b.score ? 1 : -1));

  const emojiMedals = ["🎉", "🥈", "🥉"];

  return (
    <div>
      <h1>Leaderboard</h1>
      {sortedUsers.map((user, index) => (
        <>
          {index < 3 && (
            <LeaderboardItem>
              <div>{emojiMedals[index]}</div>
              <Username>{`${user.username} - ${user.score}`}</Username>
            </LeaderboardItem>
          )}
        </>
      ))}
      <TotalUsers>
        <h2>{sortedUsers.length}</h2>
      </TotalUsers>
    </div>
  );
};

export default Leaderboard;
